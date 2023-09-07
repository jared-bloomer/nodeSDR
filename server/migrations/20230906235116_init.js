/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('roles', table => {
        table.increments();
        table.string('role').notNullable().index();
        table.timestamps(true, true);
    })
    .createTable('users', table => {
      table.increments();
      table.string('username').notNullable().index();
      table.string('password').notNullable().index();
      table.string('firstname').notNullable().index();
      table.string('lastname').notNullable().index();
      table.integer('role')
            .unsigned()
            .references('id')
            .inTable('roles')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable()
            .index();
      table.timestamps(true, true);
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('roles').dropTableIfExists('users')
};
