// 1. 导入 koa 包
const Koa = require('koa')
// 2. 实例化 app 对象
const app = new Koa()
// 3. 编写中间件 中间件就是一个函数
app.use((ctx, next) => {
  console.log(1)
  next()
  console.log(2)
})
app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})
app.use(ctx => {
  console.log(5)
  ctx.body = '处理完成'
  console.log(6)
})
// 4. 启动服务，监听3000端口
app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`)
})