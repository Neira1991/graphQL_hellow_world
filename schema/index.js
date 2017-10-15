const{makeExecutableSchema} = require('graphql-tools')
const resolvers = require('../resolvers')
const Usuario = require('./Usuario')
const Carro = require('./Carro')
const Order = require('./Order')
const rootQuery = `
  type Query{
    usuarios: [Usuario]
    usuario(id: Int): Usuario

  }
  type Mutation {
    createVehicle(carro: newCarro):Carro
    updateVehicle(carroId: Int!, carro: carroEditable):Carro
  }
`


const schema = makeExecutableSchema({
  typeDefs:[rootQuery,Usuario,Carro],
  resolvers
})

module.exports = schema
