exports.up = function (knex) {
    return knex.schema.createTable('lessons', (table) => {
        table.increments('id')
        table.string('title', 50).notNullable().unique()
        table.string('body', 255).notNullable()
        table.string('video_url', 100).notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('lessons')
}
