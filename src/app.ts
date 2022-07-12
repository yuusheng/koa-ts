import Koa from 'koa'
import KoaBody from 'koa-body'
import logger from 'koa-logger'
import router from './routes'

const app = new Koa()

app.use(KoaBody())
app.use(logger())

// logger
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// router
app.use(router.routes()).use(router.allowedMethods())

const port = process.env.PORT || 3200

app.listen(port, () => {
  console.log('server start on port http://localhost:' + port)
})
