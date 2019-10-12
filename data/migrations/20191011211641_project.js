
exports.up = function (knex) {
    return knex.schema.createTable('projects', function (table) {
        table.increments();
        table.string('project', 128)
            .notNullable();
        table.string('description')
    })
        .createTable('tasks', function (table) {
            table.increments();
            table.string('description')
                .notNullable()
            table.string('notes')
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
            table.boolean('completed')
                .notNullable


        })
        .createTable('resources', function (table) {
            table.increments()
            table.string('description')
                .notNullable()
        })
        .createTable('projects_resources', function (table) {
            table.increments();
            table.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate("CASCADE")
                .onDelete("RESTRICT")
            table.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
        })
};

exports.down = function (knex) {

};
