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
        domains: [
            'http://192.168.0.87:1337'
        ]
    },
    webpack: (config) => {
        // eslint-disable-next-line no-param-reassign
        // config.ignoreWarnings = [
        //     {
        //         message:
        //             /(magic-sdk|@walletconnect\/web3-provider|@web3auth\/web3auth)/,
        //     },
        // ],
        config.devServer = { hot: false };
        return config;
    
    },
};
