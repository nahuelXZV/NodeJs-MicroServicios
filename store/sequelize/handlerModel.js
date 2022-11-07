const { models } = require('./index');
const error = require('../../utils/error');

const handlerModel = (modelName) => {
    const model = models[modelName];
    if (!model) {
        throw error(`Model ${modelName} not found`, 500);
    }
    return model;
}

module.exports = handlerModel;