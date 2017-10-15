const Usuarioconsulta = require("./models/Usuario")
const Carroconsulta = require("./models/Carro")
const makes = {
  Acura: ['MDX', 'RDX', 'ILX'],
  Audi: ['A4', 'Q5', 'Q7'],
  BMW: ['325', '750'],
  Ford: ['Taurus', 'F150'],
  Honda: ['CR-V', 'Accord'],
  Jaguar: ['XJ', 'XF', 'XE'],
  Jeep: ['Grand Cherokee'],
  Toyota: ['RAV4', 'Corolla', 'Camry'],
}
const resolvers = {
  Query:{
    usuarios:() => Usuarioconsulta.query(),
    usuario:(rootValue, args) => Usuarioconsulta.query().findById(args.id),


  },
  Mutation:{
    createVehicle:(_,args)=>{

      if (args.carro.make in makes){
        if(makes[args.carro.make].indexOf(args.carro.model) === -1){
          console.log("No es valido agregar")
        }
        else{
          console.log("Producto agregado")
          return Carroconsulta.query().insert(args.carro)

        }
      }

    },
    updateVehicle:(_,args)=>{

      if (args.carro.make in makes){
        if(makes[args.carro.make].indexOf(args.carro.model) === -1){
          console.log("No es valido")
        }
        else{
          console.log("Producto editado")
          return Carroconsulta.query().patchAndFetchById(args.carroId, args.carro)

        }
      }

    }
  }
}

module.exports = resolvers
