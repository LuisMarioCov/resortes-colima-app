import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const ADMIN_PUBLIC = ["/admin/login"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (process.env.NODE_ENV === "production") {
    const proto = request.headers.get("x-forwarded-proto");
    if (proto === "http") {
      const url = request.nextUrl.clone();
      url.protocol = "https:";
      return NextResponse.redirect(url, 301);
    }
  }

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  if (ADMIN_PUBLIC.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next();
  }

  let response = NextResponse.next({ request });
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    const login = new URL("/admin/login", request.url);
    login.searchParams.set("error", "config");
    return NextResponse.redirect(login);
  }

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    const login = new URL("/admin/login", request.url);
    login.searchParams.set("next", pathname);
    return NextResponse.redirect(login);
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, is_active")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile?.is_active || !["owner", "manager"].includes(profile.role)) {
    const login = new URL("/admin/login", request.url);
    login.searchParams.set("error", "forbidden");
    return NextResponse.redirect(login);
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
