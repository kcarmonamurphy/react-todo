import Sequelize from 'sequelize'
import { sequelize } from './dbConfig.mjs'

const defineTodo = () => {
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
  return Todo
}

export { defineTodo }