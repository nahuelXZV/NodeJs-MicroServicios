// project files
// const store = require('../../../store/micro');
const store = require('../../../store/sequelize/db');
const controller = require('./controller');

module.exports = controller(store);
