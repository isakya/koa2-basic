// 1. 导入 koa 包
const Koa = require('koa')
// 2. 实例化 app 对象
const app = new Koa()
// 3. 编写中间件 中间件就是一个函数
app.use(async (ctx, next) => {
  ctx.message = 'aa'
  await next()
  ctx.body = ctx.message
})
app.use(async (ctx, next) => {
  ctx.message += 'bb'
  await next()
})
app.use(async ctx => {
  const res = await Promise.resolve('cc') // 返回Promise对象, 状态是fulfilled，结果是cc
  ctx.message += res
})
// 4. 启动服务，监听3000端口
app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`)
})