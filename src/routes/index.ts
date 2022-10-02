import Router from 'koa-router'

import user from './user'
const router = new Router({ prefix: '/api' })

router.get('/', async (ctx) => {
  ctx.body = { msg: 'hello koa-ts' }
})

router.use(user)

export default router
