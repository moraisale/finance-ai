import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Configurações para ignorar módulos nativos do Node.js no lado do cliente
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: false,
      fs: false,
      path: false,
      assert: false,
      stream: false,
      os: false,
    };

    return config;
  },
  // Outras configurações podem ser adicionadas aqui se necessário
};

export default nextConfig;
