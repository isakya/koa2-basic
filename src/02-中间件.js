// 1. 导入 koa 包
const Koa = require('Koa')
// 2. 实例化 app 对象
const app = new Koa()
// 3. 编写中间件 中间件就是一个函数

// 在 app.use 中只能接收一个函数作为参数，跟Express不一样
app
  .use((ctx, next) => {
    console.log('我是中间件1')
    next()
  })
  .use((ctx, next) => {
    console.log('我是中间件2')
    next()
  })
  .use((ctx) => {
    ctx.body = 'hello koa'
  })
// 4. 启动服务，监听3000端口
app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`)
})