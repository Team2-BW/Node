exports.up = function(knex) {
    return knex.schema.createTable("current", tbl => {
        tbl.integer('id')
        tbl.string('coordinates')
        tbl.string('name')
        tbl.string('description')
        tbl.string('n')
        tbl.string('s')
        tbl.string('e')
        tbl.string('w')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("current")
  };