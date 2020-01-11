const Base = require('./webpack.base.js')
const Merge = require('webpack-merge')
const DevConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        open: true,// 打开服务
        progress: true,
        contentBase: './public',// 告知服务器在哪里查找文件
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}
module.exports = Merge(
    Base,
    DevConfig
)
