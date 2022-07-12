import Router from 'koa-router'
const router = new Router({ prefix: '/user' })

router.get('/', async (ctx) => {
  ctx.body = { msg: 'user is working' }
})

export default router.routes()
