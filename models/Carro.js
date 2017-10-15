const { Model } = require('objection')
const path = require('path')

class Carro extends Model {
  static get tableName () {
    return 'carros'
  }


}

module.exports = Carro
