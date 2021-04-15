
exports.up = function(knex) {
   return knex.schema.createTable('scores', table => {
      table.increments() //id
      table.text('name', 50)
      table.integer('score')
      table.timestamps(true)
   })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('scores')
};
