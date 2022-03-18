import express from 'express'
import bodyParser from 'body-parser'

import sequelize from './dbConfig.mjs'

import { Todo } from './models.mjs'
import { getRoutes } from './routes.mjs'

const app = express()
app.use(bodyParser.json())
app.use('/', getRoutes())

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
  Todo.bulkCreate([
      { description: 'this one has already been done', checked: true },
      { description: 'remember to write up meeting notes'},
      { description: 'learn how to use node orm' }
  ])
});

const port = 3001;
app.listen(port, () => console.log(`express-todo listening on port ${port}!`));
