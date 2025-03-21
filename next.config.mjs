/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración de ESLint - ignorar durante la construcción
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configuración de TypeScript - ignorar errores durante la construcción
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configuración de imágenes
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Permitir imágenes de ImageKit
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
    ],
  },
  
  // Configuración de webpack
  webpack(config) {
    // Configuración para SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  
  // Configuración para PostCSS
  experimental: {
    appDir: true
  }
};

export default nextConfig;