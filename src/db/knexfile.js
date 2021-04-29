// Update with your config settings.

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'lms-lessons',
            user: 'postgres',
            password: 'Phoenix@541'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
}
