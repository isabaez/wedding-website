/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    additionalData: `@use "src/app/styles/variables" as *;`,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
