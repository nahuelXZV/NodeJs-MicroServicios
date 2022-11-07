const config = require('../../../config');

const user = encodeURIComponent(config.sequelize.username);
const password = encodeURIComponent(config.sequelize.password);
const host = encodeURIComponent(config.sequelize.host);
const port = config.sequelize.port;
const database = config.sequelize.database;
const typeDatabase = config.sequelize.dialect;

const url = `${typeDatabase}://${user}:${password}@${host}:${port}/${database}`;

module.exports = {
  development: {
    url: url,
    dialect: typeDatabase,
  },
  production: {
    url: url,
    dialect: typeDatabase,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
};


