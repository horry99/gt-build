const express = require('express')

const app = express()

const middle = require('webpack-dev-middleware')
const webpack = require('webpack')
// 1)首先获取webpack的配置
// 2)用webpack去处理这个配置文件(返回一个编译后的结果)
// 3)再使用中间件去启动webpack

// const config = require('../webpack.config')
// const compiler = webpack(config)
// app.use(middle(compiler))

app.get('/user', (req, res) => {
    res.json({ 'name': 'gt' })
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))