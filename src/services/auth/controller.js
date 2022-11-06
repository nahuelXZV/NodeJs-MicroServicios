// libs
const bcrypt = require('bcrypt');

// project files
const auth = require('../../../auth');

const TABLA = 'auth';

module.exports = function (store = require('../../../store/micro')) {

    async function upsert(body) {
        const auth = {
            id: body.id,
        }
        body.username ? auth.name = body.name : null;
        body.password ? auth.password = await bcrypt.hash(body.password, 7) : null;
        return store.upsert(TABLA, auth);
    }

    async function login(username, password) {
        // bcrytp.compare(password, hash).then(res => console.log(res));
        return { token: auth.sing({ username, password }) };
    }

    return {
        upsert,
        login,
    };
}