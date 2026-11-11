
type Props = { params: Promise<{ customerId: string }> };

export default async function ClienteDetallePage({ params }: Props) {
  const { customerId } = await params;
  return <h1 className="text-2xl font-semibold">Cliente {customerId}</h1>;
}
