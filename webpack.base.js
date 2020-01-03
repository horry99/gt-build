const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    resolve: {
        // modules:[path.resolve(__dirname,'./node_modules')],
        // alias:{

        // },
        // mainFields:[]
    },
    entry: path.resolve('src/index.js'),
    output: {
        filename: '[name].js',
        path: path.resolve('dist')
    },
    // 插件
    plugins: [
        // 打包模板并将打包好的文件自动插入到模板中
        new HtmlWebpackPlugin({
            title: 'webpack-demo',
            template: './public/index.html',
            // template: 'html-withimg-loader!' + path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
            // minify: {
            //     removeAttributeQuotes: true,// 去除引号
            //     collapseWhitespace: true// 去除空格、换行符   
            // }
        }),
        // 清除上次打包的文件
        // new CleanWebpackPlugin({}),
    ],
    // 执行顺序（从小往上，从右往左）
    module: {
        noParse: /jquery/,//不去解析jquery中的依赖库
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
                    loader: 'url-loader',// 一般会把小于8kb的图片才做base64转换（不用http请求，但是会比原文件更大）,以上的用file-loader(直接复制图片)处理
                    options: {
                        limit: 10000,
                        outputPath: 'img/'
                    }
                }
            },

            // js相关配置
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 转化成es5的集合插件
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],// 装饰器
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],// class语法
                            "@babel/plugin-transform-runtime" // generator,promise等更高级的语法
                        ]
                    }
                }
            },
        ]
    },
    // 不需要打包
    externals: {
        // jquery: 'jQuery'
        // 'react':'React',
        // 'react-dom':'ReactDOM'
    }
}