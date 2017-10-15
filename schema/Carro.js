module.exports=`
type Carro {
  id: ID!
  year: Int!
  make: String!
  model: String!
}

input newCarro{
  year: Int!
  make: Make!
  model: String!
}
input carroEditable{
  year: Int
  make: Make!
  model: String!
}

enum Make{
  Acura
  Audi
  BMW
  Ford
  Honda
  Jaguar
  Jeep
  Toyota
}
`
