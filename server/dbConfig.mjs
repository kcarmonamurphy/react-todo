import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbPort = process.env.DB_PORT

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@localhost:${dbPort}/${dbName}`)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

export default sequelize