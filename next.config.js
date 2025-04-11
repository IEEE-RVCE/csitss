/**@type{import('next).NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'standalone',

  //    used preReact to reduce the bundle size and faster response rate.
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
}
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = nextConfig;
// module.exports = withBundleAnalyzer({});
