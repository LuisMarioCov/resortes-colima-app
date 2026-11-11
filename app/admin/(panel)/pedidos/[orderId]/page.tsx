
type Props = { params: Promise<{ orderId: string }> };

export default async function PedidoDetallePage({ params }: Props) {
  const { orderId } = await params;
  return (
    <div>
      <h1 className="text-2xl font-semibold">Pedido {orderId}</h1>
      <p className="mt-2 text-slate-400">Detalle, estados, cobros y CFDI (shell).</p>
    </div>
  );
}
