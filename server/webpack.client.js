const path = require('path');
const baseConfig = require('./webpack.common');
const merge = require('webpack-merge');
// const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const packageJson = require('./package.json');
// const ExternalTemplateRemotesPlugin = require('./ExternalTemplateRemotesPlugin');

module.exports = merge(baseConfig, {
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'http://localhost:3000/'
    },
    // plugins: [
    //     new ModuleFederationPlugin({
    //         name: 'shell',
    //         filename: 'remoteEntry.js',
    //         library: { type: "commonjs-module" },
    //         remotes: {
    //             home: 'home@[window.homeurl]/remoteEntry.js'
    //         },
    //         // remotes: {
    //         //     website2: path.resolve(
    //         //       __dirname,
    //         //       "../remoteServer/public/server/container.js"
    //         //     ),
    //         exposes: {},
    //         // shared: ['react', 'react-dom']
    //         shared: packageJson.dependencies // optional way to list all dependencies as shared
    //     }),
    //     new ExternalTemplateRemotesPlugin(),
    // ]
});