import Sequelize from 'sequelize'

const sequelize = new Sequelize('postgres://kevin@localhost:5432/todos_express')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

export default sequelize