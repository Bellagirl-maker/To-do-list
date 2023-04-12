const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './build.js'),
        filename: '[name].bundle.js'
    },
    Plugins: {
        new : HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        })

    }

}