/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    prependData: `@import "src/app/components/global/_variables.scss";`,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
