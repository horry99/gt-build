const Base = require('./webpack.base.js')
const Webpack = require('webpack')
const path = require('path')
const Merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const AddAssetsHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const HtmlWebpackplugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ProdConfig = {
    mode: 'production',
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new HtmlWebpackplugin({
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        }),
        // 提取css
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        // 将额外打包的js插入到body中
        new AddAssetsHtmlWebpackPlugin(
            {
                filepath: require.resolve('./dist/_dll_vendor.js'),
            }
        ),
        // 首先查找第三方库是否已经打包
        new Webpack.DllReferencePlugin({
            manifest: require(path.resolve(__dirname, './dist/vendor.manifest.json'))
        }),
        new Webpack.IgnorePlugin(/\.\/locale$/, /moment$/)
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    externals: {
        "vue": "Vue"
    },
    devtool: 'cheap-module-source-map'
}
console.log(process.env);
module.exports = Merge(
    Base,
    ProdConfig
)
