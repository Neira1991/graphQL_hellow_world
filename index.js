const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

const schema = require('./schema')
require('./db/setup')
const app = express()
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({schema })
)
app.use(
  '/grapihql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)
const PORT = 5678
app.listen(PORT,()=>{
  console.log("servidor corriendo");
})
