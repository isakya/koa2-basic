// 1. 导入 koa 包
const Koa = require('koa')
// 2. 实例化 app 对象
const app = new Koa()

// 3. 导入 router 路由
const userRoute = require('./router/user.route')

// 4. 注册中间件
// router.routes() 返回一个函数
app.use(userRoute.routes())
// 状态码
app.use(userRoute.allowedMethods())

// 5. 启动服务，监听3000端口
app.listen(3000, () => {
  console.log(`server is running on http://localhost:3000`)
})