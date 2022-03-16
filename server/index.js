const app = require('express')()

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://kevin@localhost:5432/todos_express')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

const Todo = sequelize.define('todos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: Sequelize.TEXT,
  checked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
    validate: {
      isIn: [[true, false]]
    }
  }
});

const Op = Sequelize.Op;

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
  Todo.bulkCreate([
      { description: 'this one has already been done', checked: true },
      { description: 'remember to write up meeting notes'},
      { description: 'learn how to use node orm' }
  ]).then(function() {
      return Todo.findAll();
  }).then(function(todos) {
      console.log(todos);
  });
});

app.use(require('body-parser').json());

app.get('/api', (req, res) => res.send('Todos App'));

app.get('/api/todos', function(req, res) {
  Todo.findAll().then(todos => res.json(todos));
});

function parseBoolean(str) {
  return String(str).toLowerCase() === 'true';
}

app.get('/api/todos/search', function(req, res) {
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

app.get('/api/todos/:id', function(req, res) {
  Todo.findByPk(req.params.id).then(todo => res.json(todo));
});

app.post('/api/todos', async function(req, res) {
  try {
    let todo = await Todo.create({ description: req.body.description, checked: req.body.checked })
    res.json(todo)
  } catch (e) {
    res.json(e)
  }
});

const port = 5000;
app.listen(port, () => console.log(`express-todo listening on port ${port}!`));
