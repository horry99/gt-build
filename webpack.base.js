const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve('dist'),
        publicPath:'/'
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-demo',
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
    module: {
        noParse: /jquery/,
        rules: [
            // html中图片
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
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