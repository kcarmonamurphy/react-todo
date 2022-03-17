import express from 'express'
import Sequelize from 'sequelize'

import { Todo } from './models.mjs'

const Op = Sequelize.Op;

function parseBoolean(str) {
  return String(str).toLowerCase() === 'true';
}

function getRoutes() {
  const router = express.Router()

  router.get('/', (req, res) => res.send('Todos App'));

  router.get('/todos', function(req, res) {
    Todo.findAll().then(todos => res.json(todos));
  });

  router.get('/todos/search', function(req, res) {
    let whereQuery = {}
    if (req.query.checked) {
      whereQuery.checked = parseBoolean(req.query.checked)
    }
    if (req.query.description) {
      whereQuery.description = {
        [Op.like]: { [Op.any]: [].concat(req.query.description).map(val => `%${val}%`) }
      }
    }
  
    Todo.findAll({
      where: whereQuery
    }).then(todos => res.json(todos));
  });
  
  router.get('/todos/:id', function(req, res) {
    Todo.findByPk(req.params.id).then(todo => res.json(todo));
  });
  
  router.post('/todos', async function(req, res) {
    try {
      let todo = await Todo.create({ description: req.body.description, checked: req.body.checked })
      res.json(todo)
    } catch (e) {
      res.json(e)
    }
  })

  router.put('/todos/:id', async function(req, res) {
    try {
      let todo = await Todo.findByPk(req.params.id)
      todo.set(req.body)
      await todo.save()
      res.json(todo)
    } catch (e) {
      res.json(e)
    }
  })

  return router
}

export { getRoutes }