import { Sequelize } from 'sequelize'

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    pool: {
        max: 5, // maximum number of connections in the pool
        min: 0, // minimum number of connections in the pool
        idle: 10000, // maximum time, in milliseconds, that a connection can be idle before being released
        acquire: 30000 // maximum time, in milliseconds, that pool will try to get connection before throwing error
    }
});

export default database;