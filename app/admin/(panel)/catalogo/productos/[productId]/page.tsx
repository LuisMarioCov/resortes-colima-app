
type Props = { params: Promise<{ productId: string }> };

export default async function AdminProductoPage({ params }: Props) {
  const { productId } = await params;
  return <h1 className="text-2xl font-semibold">Producto {productId}</h1>;
}
