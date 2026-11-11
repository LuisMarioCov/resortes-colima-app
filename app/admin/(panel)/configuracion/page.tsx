export const metadata = { title: "Configuración" };

export default function ConfiguracionPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Configuración</h1>
      <p className="mt-2 text-slate-400">
        Umbral de envío gratis: $2,999 MXN (fijo). Tarifa <code>shipping_fee_mxn</code> solo owner.
      </p>
    </div>
  );
}
