// 3. 使用 koa-router
// 3.1 导入koa-router 包
const Router = require('koa-router')
// 3.2 实例化 router 对象
const router = new Router({ prefix: '/users' })
// 3.3 编写路由规则

const db = [
  { id: 1, name: 'zs', age: 10 },
  { id: 2, name: 'zs', age: 20 },
  { id: 3, name: 'zs', age: 45 },
  { id: 4, name: 'zs', age: 30 },
  { id: 5, name: 'zs', age: 40 },
]

// GET /uers ---- 获取所有用户的信息，返回一个数组
router.get('/', (ctx) => {
  // 通过 ctx.query 是 ctx.request.query 的代理 解析键值对参数
  const { start = 0, end = 0 } = ctx.query
  const res = db.filter((item) => {
    return item.age >= start && item.age <= end
  })
  res.length === 0 ? ctx.throw(404) : (ctx.body = res)
})

// GET /users/:id ---- 根据 id 获取单个用户的信息，返回一个对象
router.get('/:id', (ctx) => {
  // 解析 id 参数
  const id = ctx.params.id
  const res = db.filter(item => item.id == id)
  if (!res[0]) ctx.throw(404)
  ctx.body = res[0]
})
router.post('/', (ctx) => {
  ctx.body = '创建用户'
})

module.exports = router