// await 不能单独使用，必须跟 async 连用


// await 后面跟一个promise的对象，表达式返回promise的结果

async function foo() {
  const p = new Promise((resolve, reject) => {
    resolve(123)
  })
  const res = await p
  // await 后面不是promise对象时，会自动生成一个 promise对象，然后将resolve的结果设置为 await 后面跟着的东西
  // const res = await 123
  console.log(res)
}

foo() // 打印 123