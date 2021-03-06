// 1. 导入 koa 包
const Koa = require('koa')
// 2. 实例化 app 对象
const app = new Koa()
// 3. 编写中间件 中间件就是一个函数
app.use((ctx) => {
  // ctx 代表 http 请求的上下文
  ctx.body = 'hello koa'
})
// 4. 启动服务，监听3000端口
app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`)
})