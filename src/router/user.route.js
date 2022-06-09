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

// GET /uers?start=18&&end=20 ---- 获取所有用户的信息，返回一个数组
router.get('/', (ctx) => {
  // 通过 ctx.query 是 ctx.request.query 的代理 解析键值对参数
  const { start = 0, end = 0 } = ctx.query
  if (start <= end) ctx.throw(422)
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
  console.log(ctx.request.body)
  ctx.body = ctx.request.body
})

// 接口：获取 id = 1 的用户编写的文章的信息 article = 1
router.get('/:id/article/:aid', (ctx) => {
  console.log(ctx.params)
  // 没有通过ctx.body返回数据时，默认koa返回404错误
  // a.b // 为了报运行时错误
  if (false) {
    ctx.body = { id: 1, title: '文章1', content: '文章1' }
  } else {
    // ctx.throw(422, '参数不符合条件')
    // 提交错误
    return ctx.app.emit('error', { code: 404, message: '资源没有找到' }, ctx)
    // {},ctx 对应 (err, ctx) => {}
  }
})

module.exports = router