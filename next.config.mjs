// @ts-check
// Plain ESM config: Node loads it directly, so Next.js never needs SWC to transpile it.
// (A next.config.ts must be compiled by SWC first, which fails on hosts without native SWC support.)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Serve images as-is (they are already sized and compressed). On-the-fly optimisation needs the
  // native "sharp" library, which older shared-hosting servers such as Hostinger may not support.
  images: { unoptimized: true },
  // The Dockerfile sets NEXT_OUTPUT=standalone to produce a small self-contained server.
  ...(process.env.NEXT_OUTPUT === "standalone" ? { output: "standalone" } : {}),
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
