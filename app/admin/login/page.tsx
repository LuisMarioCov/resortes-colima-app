
export const metadata = { title: "Iniciar sesión" };

type Props = { searchParams: Promise<{ error?: string; next?: string }> };

export default async function AdminLoginPage({ searchParams }: Props) {
  const { error, next } = await searchParams;
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md space-y-6 rounded-xl border border-slate-800 bg-slate-900 p-8 text-slate-100">
        <h1 className="text-xl font-semibold text-amber-300">Acceso al panel</h1>
        {error === "forbidden" && (
          <p role="alert" className="text-sm text-red-300">
            Tu cuenta no tiene acceso activo al panel.
          </p>
        )}
        {error === "config" && (
          <p role="alert" className="text-sm text-red-300">
            Configura Supabase en el entorno para habilitar el login.
          </p>
        )}
        <form className="space-y-4" action={next ? `/admin?next=${encodeURIComponent(next)}` : "/admin"}>
          <label className="block text-sm">
            Correo
            <input
              type="email"
              name="email"
              autoComplete="username"
              required
              className="mt-1 w-full min-h-11 rounded-md border border-slate-700 bg-slate-950 px-3 text-white"
            />
          </label>
          <label className="block text-sm">
            Contraseña
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full min-h-11 rounded-md border border-slate-700 bg-slate-950 px-3 text-white"
            />
          </label>
          <button
            type="submit"
            className="w-full min-h-11 rounded-md bg-amber-600 font-medium text-slate-950 hover:bg-amber-500"
          >
            Entrar
          </button>
        </form>
        <p className="text-xs text-slate-400">
          Login con Supabase Auth (shell). La sesión se valida en middleware y RLS.
        </p>
      </div>
    </main>
  );
}
