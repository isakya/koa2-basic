// 3. 使用 koa-router
// 3.1 导入koa-router 包
const Router = require('koa-router')
// 3.2 实例化 router 对象
const router = new Router()
// 3.3 编写路由规则
router.get('/users', (ctx) => {
  ctx.body = '这个是用户页'
})
router.post('/users', (ctx) => {
  ctx.body = '创建用户'
})

module.exports = router