export const metadata = { title: "Pedidos" };

export default function PedidosListPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Pedidos</h1>
      <p className="mt-2 text-slate-400">Estados D2: cotizado → pendiente → hecho → enviado, más cancelado.</p>
    </div>
  );
}
