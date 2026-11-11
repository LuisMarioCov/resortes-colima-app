export const metadata = { title: "Panel" };

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-white">Dashboard operativo</h1>
      <ul className="list-disc space-y-1 pl-5 text-slate-300">
        <li>Cola de pedidos en pendiente</li>
        <li>Solicitudes personalizadas nuevas</li>
        <li>CFDI pendientes de vínculo</li>
      </ul>
    </div>
  );
}
