// libs
const nanoid = require('nanoid');

// project files
const auth = require('../auth');

const TABLA = 'user';

module.exports = function (store = require('../../../store/micro')) {

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function upsert(body) {
        const user = {
            id: nanoid(),
            name: body.name,
            username: body.username,
        };

        if (body.password || body.username) {
            await auth.upsert(TABLA, {
                id: user.id,
                username: user.username,
                password: body.password,
            });
        }


        return store.upsert(TABLA, user);
    }

    return {
        list,
        get,
        upsert,
    };
}