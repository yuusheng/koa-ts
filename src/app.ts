import path from 'path'
import Koa from 'koa'
import koaBody from 'koa-body'
import logger from 'koa-logger'
import koaStatic from 'koa-static'
import router from './routes'

const app = new Koa()

app
  .use(
    koaBody({
      multipart: true, // 文件支持格式
      formidable: {
        // 不要使用相对路径
        uploadDir: path.resolve(__dirname, '../public/uploads'), // 上传目录
        keepExtensions: true, // 设置文件后缀名保留
      },
    }),
  )
  .use(koaStatic(path.resolve(__dirname, '../public')))
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

const server = app.listen(port, () => {
  console.log(`server start on port http://localhost:${port}`)
})

export { server, app }
