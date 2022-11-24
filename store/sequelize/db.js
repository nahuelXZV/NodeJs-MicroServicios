// projects files
const getModel = require('./handlerModel');
const error = require('../../utils/error');

async function list(table) {
    console.log('list', table);
    const model = getModel(table);
    return await model.findAll();
}

async function get(tabla, id) {
    const model = getModel(tabla);
    const result = await model.findByPk(id);
    if (!result) {
        throw error(`${model} not found`, 404)
    }
    return result;
}

async function update(tabla, id, data) {
    const model = getModel(tabla);
    const result = await model.findByPk(id);
    if (!result) {
        throw error(`${model} not found`, 404)
    }
    result.update(data);
    return result;
}

async function insert(tabla, data) {
    const model = getModel(tabla);
    return await model.create(data);
}


async function remove(tabla, id) {
    const model = getModel(tabla);
    const result = await model.findByPk(id);
    if (!result) {
        throw error(`${model} not found`, 404)
    }
    result.destroy();
    return true;
}

async function query(tabla, q) {
    const model = getModel(tabla);
    return await model.findAll({
        where: q,
    });
}

module.exports = {
    list,
    get,
    update,
    insert,
    remove,
    query,
}