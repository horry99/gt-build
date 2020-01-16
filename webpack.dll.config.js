const path = require('path')
const Webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 关于dll打包中，使用声明 production || 使用 alias 处理路径 可以大幅减少包的体积。
module.exports = {
    mode: 'production',
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, './dist'),
        library: '_dll_[name]'// 对打包的文件增加一个变量
    },
    // 使用别名，减少路径的引用长度（可以减少第三方库的打包面积）
    resolve: {
        // alias: {
        //     'react': path.resolve(__dirname, './node_modules/react/cjs/react.production.min.js'),
        //     'react-dom': path.resolve(__dirname, './node_modules/react-dom/cjs/react-dom.production.min.js'),
        // }
    },
    plugins: [
        new Webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.resolve(__dirname, './dist', '[name].manifest.json'),
        }),
        // 压缩
        new UglifyJsPlugin({
            uglifyOptions: {
                output: {
                    comments: false,
                    beautify: false,
                },
                compress: true,
                warnings: false
            }
        })
    ]
}