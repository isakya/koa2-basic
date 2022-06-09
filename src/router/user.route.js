// 3. 使用 koa-router
// 3.1 导入koa-router 包
const Router = require('koa-router')
// 3.2 实例化 router 对象
const router = new Router({ prefix: '/users' })
// 3.3 编写路由规则

const db = [
  { id: 1, name: 'zs', age: 20 },
  { id: 2, name: 'zs', age: 20 },
  { id: 3, name: 'zs', age: 20 },
  { id: 4, name: 'zs', age: 20 },
  { id: 5, name: 'zs', age: 20 },
]

// GET /uers ---- 获取所有用户的信息，返回一个数组
router.get('/', (ctx) => {
  ctx.body = db
})

// GET /users/:id ---- 根据 id 获取单个用户的信息，返回一个对象
router.get('/:id', (ctx) => {
  // 解析 id 参数
  const id = ctx.params.id
  console.log(id)
  const res = db.filter(item => item.id == id)
  if (!res[0]) ctx.throw(404)
  ctx.body = res[0]
})
router.post('/', (ctx) => {
  ctx.body = '创建用户'
})

module.exports = router