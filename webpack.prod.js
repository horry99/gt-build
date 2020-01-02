const Base = require('./webpack.base.js')
const Merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ProdConfig = {
    mode: 'production',
    // 优化项
    optimization: {
        //     // 使用MiniCssExractPlugin提取css,需要用OptimizeCSSAssetsPlugin压缩css,然后需要TerserJSPlugin压缩js代码,否则js不会压缩
        //     // 如果没有使用OptimizeCSSAssetsPlugin对css进行压缩，webpack会默认使用TerserJSPlugin进行压缩js代码
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
         // 提取css
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool:'cheap-module-source-map'
}
module.exports = Merge(
    Base,
    ProdConfig
)
