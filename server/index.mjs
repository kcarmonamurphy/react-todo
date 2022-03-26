import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import sequelize from './dbConfig.mjs'
import { Todo } from './models.mjs'
import { getRoutes } from './routes.mjs'

const app = express()
app.use(bodyParser.json())
app.use('/api', getRoutes())

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
  Todo.bulkCreate([
      { description: 'this one has already been done', checked: true },
      { description: 'remember to write up meeting notes'},
      { description: 'learn how to use node orm' }
  ])
});

dotenv.config()
const DEFAULT_SERVER_PORT = 7002
const port = process.env.SERVER_PORT || DEFAULT_SERVER_PORT

app.listen(port, () => console.log(`express-todo listening on port ${port}!`));
