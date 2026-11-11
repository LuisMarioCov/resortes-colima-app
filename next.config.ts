import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Rutas dinámicas con params en el panel */
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
