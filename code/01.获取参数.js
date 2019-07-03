const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// 注册 body-parser 中间件，来解析Post提交过来的表单数据
app.use(bodyParser.urlencoded({ extended: false }))

// 监听客户端的 get 请求
app.get('/user', (req, res) => {
  // 服务器，可以直接通过 req.query 属性，获取到客户端提交到服务器的 查询参数
  console.log(req.query)
  res.send('ok')
})

// URL 规则中的 : 表示参数项；
app.get('/user/:id/:name', (req, res) => {
  console.log(req.params)
  res.send('ok')
})




// 监听客户端 post 请求
app.post('/user', (req, res) => {
  // 注意：如果在项目中，想要通过 req.body 获取客户端提交的表单数据，
  // 必须 先注册 body-parser 中间件才可以！
  console.log(req.body)
  res.send('ok')
})

app.listen(3001, () => {
  console.log('server running at http://127.0.0.1:3001')
})
