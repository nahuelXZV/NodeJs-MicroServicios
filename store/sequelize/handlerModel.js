const { models } = require('./index');
const error = require('../../utils/error');

const handlerModel = (modelName) => {
    let model;
    modelName == 'user' ? model = models.User : '';
    modelName == 'auth' ? model = models.Auth : '';
    if (!model) {
        throw error(`Model ${modelName} not found`, 500);
    }
    return model;
}

module.exports = handlerModel;