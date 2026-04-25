import type { NextConfig } from "next";

const BE_URL = process.env.BE_URL ?? "http://localhost:3001";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/api/be/:path*",
        destination: `${BE_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
