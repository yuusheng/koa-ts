import request from 'supertest'
import app from '../src/app'

test('hello world works', async () => {
  const response = await request(app.callback()).get('/api')
  expect(response.status).toBe(200)
  expect(response.body.msg).toBe('hello koa-ts')
})
