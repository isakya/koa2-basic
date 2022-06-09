const Koa = require('koa')
const app = new Koa()
app.use((ctx) => {
  console.log(ctx) // http上下文（http请求 + http响应）
  // 1. ctx.request: http请求
  // 2. ctx.response: http响应

  // 可以不写request response  
  if (ctx.url === '/') {
    ctx.body = '主页'
  } else if (ctx.request.url === '/users') {
    if (ctx.request.method === 'GET') {
      ctx.response.body = '这是用户页'
    } else if (ctx.request.method === 'POST') {
      ctx.response.body = '创建用户'
    } else {
      ctx.response.status = 405
    }
  } else {
    ctx.response.status = 404
  }
})
app.listen(3000, () => {
  console.log('http://localhost:3000')
})