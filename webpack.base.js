const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Webpack = require('webpack')
const env = require('./env')
const getEnv = require(`./src/getEnv/${env.getEnv()}`)
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
        new VueLoaderPlugin({}),
        new Webpack.DefinePlugin({
            'process.env': JSON.stringify(getEnv)
        })
    ],
    // loader
    module: {
        noParse: /jquery/,
        rules: [
            // html中图片
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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
    },
    resolve: {
        extensions: ['.vue', '.js', 'jsx', '.scss', '.css'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
}