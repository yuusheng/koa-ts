import request from 'supertest'
import { server, app } from '../src/app'
import { test, expect, afterAll } from 'vitest'

afterAll(() => {
  server.close()
})

test('hello world works', async () => {
  const response = await request(app.callback()).get('/api')
  expect(response.status).toBe(200)
  expect(response.body.msg).toBe('hello koa-ts')
})
