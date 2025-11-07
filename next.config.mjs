/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    prependData: `@import "src/app/styles/_variables.scss";`,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
