exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('usuarios', (table) => {
      table.increments('id').primary().unsigned()
      table.string('firstName')
      table.string('lastName')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('usuarios')
  ])
)
