import Koa from 'koa'
import KoaBody from 'koa-body'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

app.use(KoaBody())

router.get('/', async (ctx) => {
  ctx.body = { msg: 'hello koa-ts' }
})

app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 3200

app.listen(port, () => {
  console.log('server start on port http://localhost:' + port)
})
