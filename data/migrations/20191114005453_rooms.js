
exports.up = function(knex) {
  return knex.schema.createTable("rooms", tbl => {
      tbl.increments()
      tbl.string('coordinates')
      tbl.string('name')
      tbl.string('description')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("rooms")
};
