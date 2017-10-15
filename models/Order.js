const { Model } = require('objection')
const path = require('path')

class Order extends Model {
  static get tableName () {
    return 'orders'
  }


}

module.exports = Order
