import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import { connect, sync } from './dbConfig.mjs'
import { defineTodo } from './models.mjs'
import { getRoutes } from './routes.mjs'

(async () => {
  await connect()
  const Todo = defineTodo()
  await sync(Todo)

  const app = express()
  app.use(bodyParser.json())
  app.use('/api', getRoutes(Todo))

  dotenv.config()
  const DEFAULT_SERVER_PORT = 7002
  const port = process.env.SERVER_PORT || DEFAULT_SERVER_PORT

  app.listen(port, () => console.log(`express-todo listening on port ${port}!`));
})()


