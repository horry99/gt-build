const Base = require('./webpack.base.js')
const Merge = require('webpack-merge')
const DevConfig = {
    mode: 'development',
    // 启动配置webpack-dev-server
    devServer: {
        port: 8080,
        open: true,// 打开服务
        progress: true,
        contentBase: './public',// 告知服务器在哪里查找文件
        /**** 
    * 1)服务器不处理跨域，前端处理（重点）
    * 2)服务器和前端在同一域名下,前端单纯的模拟数据
    * 3)服务器处理跨域，不用代理,并且启动webpack,需要使用webpack的中间件webpack-dev-middleware
   */
        // 1)将localhost:8080的转发到localhost:3000（有/api开头的接口）
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' } // 没有/api开头的接口给重置掉
            }
        }
        // 2) 模拟数据
        // before(app) {// 提供的方法 app就是server的app
        //     app.get('/user', (req, res) => {
        //         res.json({ 'name': 'gt1' })
        //     })
        // }
    },
    module: {
        rules: [
            /**
           * MiniCssExractPlugin.loader将css放入到link中(pro)
           * style-loader 将css放入到style中
           * css-loader 将非标准的css转成css
           * postcss-loader对css进行一些处理 postcss-load postcss autoprefixer给css添加兼容性前缀
           * 配置sass相关的信息 node-sass sass-loader 依赖node-sass解析
           * less-loader less
           * ***/
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool:'cheap-module-eval-source-map'
}
module.exports = Merge(
    Base,
    DevConfig
)
