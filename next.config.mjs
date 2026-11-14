/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    // Every SCSS file gets the variables in _variables.scss. loadPaths (relative to the project root, where next build
    // runs) lets the @use resolve from any folder; Turbopack doesn't resolve a project-root path in the @use itself.
    loadPaths: ['src/app/styles'],
    additionalData: `@use "variables" as *;`,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
