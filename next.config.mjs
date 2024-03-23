/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: '/github-pages',
  distDir: "out",
  images: {
    unoptimized: true,
  }
};

// basePath: '/habibi-travels-next-app',

export default nextConfig;
