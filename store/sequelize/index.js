const setupModels = require('./database/models');
const config = require('../../config');
const { Sequelize } = require('sequelize');

const user = encodeURIComponent(config.sequelize.username);
const password = encodeURIComponent(config.sequelize.password);
const host = encodeURIComponent(config.sequelize.host);
const port = config.sequelize.port;
const database = config.sequelize.database;
const typeDatabase = config.sequelize.dialect;

const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;

const options = {
    dialect: config.typeDatabase, // 'mysql' | 'sqlite' | 'postgres' | 'mariadb' | 'mssql'
    logging: false, // false
};

if (config.APP_PROD === 'true') {
    options.dialectOptions = {
        ssl: {
            rejectUnauthorized: false,
        },
    };
}
const sequelizeConnection = new Sequelize(url, options); // create a new sequelize instance
console.log('Sequelize connection created');
setupModels(sequelizeConnection); // setup models
module.exports = sequelizeConnection;