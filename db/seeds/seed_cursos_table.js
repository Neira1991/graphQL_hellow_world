
exports.seed = (knex, Promise) => {
  return knex('usuarios').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return knex('usuarios').insert([{
        id: i + 1,
        firstName: "firstName",
        lastName: "lastName" 
      }])
    })

    return Promise.all(promises)
  })
}
