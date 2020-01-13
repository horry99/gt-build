const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        filename: '[name].js',
        path: path.resolve('dist'),
        publicPath: '/'
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-template',
            template: './public/index.html',
            filename: 'index.html',
        }),
        new VueLoaderPlugin({})
    ],
    module: {
        noParse: /jquery/,
        rules: [
            // html中图片
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            // 图片
            {
                test: /\.(jpg|png|jpeg)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'img/'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    }
}