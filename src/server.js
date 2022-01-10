const Koa = require('koa')
const mount = require('koa-mount');
const { graphqlHTTP } = require('koa-graphql');

const schema = require('./graphql/schema');
const initDB = require('./database/database')

require('dotenv').config();

const app = new Koa()

initDB()
app.listen(9000)

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))