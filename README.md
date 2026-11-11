# Resortes Colima — sistema interno (`resortes-colima-app`)

Panel de administración **Next.js (App Router)** + **Supabase** (Postgres, Auth, RLS, Storage) para Resortes Colima. Este repositorio es el **hogar canónico del esquema** (`supabase/migrations`, `seed.sql`, tests RLS).

El sitio público (catálogo, carrito, Stripe Checkout y webhooks) vive en el repositorio hermano **`resortes-colima-web`**. Ambos proyectos comparten **el mismo proyecto Supabase**.

## Contenido

| Área | Rutas |
|------|--------|
| Login | `/admin/login` |
| Panel | `/admin/*` — pedidos, clientes, catálogo, personalizados, ingresos/egresos, CFDI, equipo, configuración |

La raíz `/` redirige a `/admin`. Las rutas del panel coinciden con [`docs/arquitectura/ADMIN_IA.md`](docs/arquitectura/ADMIN_IA.md).

## Documentación

- [`docs/negocio/BRIEF.md`](docs/negocio/BRIEF.md)
- [`docs/arquitectura/SCHEMA.md`](docs/arquitectura/SCHEMA.md)
- [`docs/arquitectura/ADMIN_IA.md`](docs/arquitectura/ADMIN_IA.md)
- [`docs/arquitectura/SEGURIDAD.md`](docs/arquitectura/SEGURIDAD.md)
- [`docs/arquitectura/FLUJOS.md`](docs/arquitectura/FLUJOS.md)
- [`docs/arquitectura/FINANZAS_REGLAS.md`](docs/arquitectura/FINANZAS_REGLAS.md)

## Requisitos

- Node.js 20+
- npm
- [Supabase CLI](https://supabase.com/docs/guides/cli) (opcional, para Postgres local y `npm run test:rls`)

## Configuración local

```bash
cp .env.example .env.local
# Completa NEXT_PUBLIC_SUPABASE_* y SUPABASE_SERVICE_ROLE_KEY del mismo proyecto que la web.

npm install
npm run dev -- -p 43123
```

Abre http://127.0.0.1:43123/admin (o http://127.0.0.1:43123 → redirige al panel).

### Supabase local (schema + RLS)

```bash
npx supabase start
npx supabase db reset
npm run test:rls
```

## Build

```bash
npm run build
```

## Secretos

No commitees `.env.local`. `SUPABASE_SERVICE_ROLE_KEY` es **solo servidor** (sin `NEXT_PUBLIC_`). Las claves de Stripe pertenecen al repo web, no a este panel.

## Origin

Repositorio privado publicado como **`resortes-colima-app`** (namespace del dueño en Origin). No desplegar a producción desde este agente sin revisión explícita.
