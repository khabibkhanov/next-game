const path = require("path");

module.exports = {
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
        domains: ["localhost"],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'localhost',
              port: '1337',
              pathname: '',
            },
          ],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // eslint-disable-next-line no-param-reassign
        config.ignoreWarnings = [
            {
                message:
                    /(magic-sdk|@walletconnect\/web3-provider|@web3auth\/web3auth)/,
            },
        ];
        return config;
    },
};
