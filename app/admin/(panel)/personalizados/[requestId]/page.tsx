
type Props = { params: Promise<{ requestId: string }> };

export default async function PersonalizadoDetallePage({ params }: Props) {
  const { requestId } = await params;
  return <h1 className="text-2xl font-semibold">Solicitud {requestId}</h1>;
}
