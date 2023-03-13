const path = require("path");

module.exports = {  
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
  experimental: {
    largePageDataBytes: 800 * 1000,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/assets/scss")],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
        // 'res.cloudinary.com'
    ],
    // Add caching configuration for server-side rendered pages
    // generateEtags: false,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // formats: ['image/webp'],
    onDemandEntries: {
        // Set a cache lifetime of 1 day (in seconds)
        maxInactiveAge: 24 * 60 * 60,
    }
  },

  webpack: (config) => {
    config.devServer = { hot: false };
    return config;
  },
}