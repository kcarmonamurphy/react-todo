# React Todo

This project was bootstrapped with Create React App. See the [README](readme/CRA-README.md).

It uses a backend server written with in the Express framework using the Sequelize ORM.

### Getting Started

1) Ensure you're running Node v16 or later.

2) Ensure you've got Postgres installed. Create a database and remember the name.

3) In your projects directory, `git clone git@github.com:kcarmonamurphy/react-todo.git`

4) `cd react-todo`. Create a `.env`. Configure your `.env` file. Here's an example:

```
PORT=7001 # CRA port
SERVER_PORT=7002 # Server port

DB_USER=kcmurphy # Typically the name of your user
DB_PORT=5432
DB_NAME=todos_express # From step 2
```

5) In your `react-todo` folder, run `npm install`.

6) Open two new tabs and cd into the project directory. Run `npm run client` and `npm run server` to load both the frontend and backend portions of the code.