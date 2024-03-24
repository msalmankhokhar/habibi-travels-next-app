/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  images: {
    unoptimized: true,
  }
};

// basePath: '/habibi-travels-next-app',

export default nextConfig;
