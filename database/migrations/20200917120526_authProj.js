
exports.up = function(knex) {
  return knex.schema
    .createTable('departments', tbl => {
        tbl.increments();

        tbl.string('name', 123).notNullable().unique();
    })
    .createTable('users', tbl => {
        tbl.increments();

        tbl.string('username', 123).notNullable().unique().index();
        tbl.string('password', 250).notNullable();

        tbl
            .integer('department')
            .unsigned()
            .references('departments.id')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('departments')
    .dropTableIfExists('users');
};
