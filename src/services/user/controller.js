// libs
const nanoid = require('nanoid');

// project files
const auth = require('../auth');

const TABLA = 'user';

module.exports = function (store = require('../../../store/sequelize/db')) {

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function create(body) {
        const user = {
            name: body.name,
            createdAt: new Date(),
        };
        const newUser = await store.insert(TABLA, user);
        auth.create({
            email: body.email,
            password: body.password,
            userId: newUser.id,
        })
        return newUser;
    }

    async function update(body, id) {
        const user = {
            name: body.name,
        };
        return store.update(TABLA, id, user);
    }

    async function destroy(id) {
        return store.remove(TABLA, id);
    }

    return {
        list,
        get,
        create,
        update,
        destroy,
    };
}