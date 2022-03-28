import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME
const dbPort = process.env.DB_PORT

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@localhost:${dbPort}/${dbName}`)

const connect = async () => {
  try {
    await sequelize.authenticate()
    return 'Connection has been established successfully.'
  } catch (err) {
    return `Unable to connect to the database: ${err}`
  }
}

const sync = async (Todo) => {
  sequelize.sync({ force: true }).then(() => {
    console.log(`Database & tables created!`);
    Todo.bulkCreate([
        { description: 'this one has already been done', checked: true },
        { description: 'remember to write up meeting notes'},
        { description: 'learn how to use node orm' }
    ])
  })
}

export { connect, sync, sequelize }