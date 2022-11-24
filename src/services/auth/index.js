// project files
// const store = require('../../../store/micro');
const controller = require('./controller');
const store = require('../../../store/sequelize/db');

module.exports = controller(store);
