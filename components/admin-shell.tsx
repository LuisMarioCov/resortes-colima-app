import Link from "next/link";
import type { ReactNode } from "react";

const NAV = [
  { href: "/admin", label: "Inicio" },
  { href: "/admin/pedidos", label: "Pedidos" },
  { href: "/admin/personalizados", label: "Personalizados" },
  { href: "/admin/ingresos", label: "Ingresos" },
  { href: "/admin/egresos", label: "Egresos" },
  { href: "/admin/clientes", label: "Clientes" },
  { href: "/admin/catalogo", label: "Catálogo" },
  { href: "/admin/cfdi", label: "CFDI" },
  { href: "/admin/equipo", label: "Equipo" },
  { href: "/admin/configuracion", label: "Configuración" },
];

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <aside className="hidden w-56 shrink-0 border-r border-slate-800 bg-slate-900 p-4 md:block">
        <p className="mb-6 text-sm font-semibold text-amber-300">Resortes Colima</p>
        <nav aria-label="Admin" className="flex flex-col gap-1 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-11 rounded-md px-3 py-2 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="border-b border-slate-800 px-4 py-3 text-sm text-slate-300">
          Panel interno
        </header>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
