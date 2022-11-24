// libs
const bcrypt = require('bcrypt');

// project files
const auth = require('../../../auth');

const TABLA = 'auth';

module.exports = function (store = require('../../../store/sequelize/db')) {

    async function upsert(body) {
        const auth = {
            id: body.id,
        }
        body.username ? auth.name = body.name : null;
        body.password ? auth.password = await bcrypt.hash(body.password, 7) : null;
        return store.upsert(TABLA, auth);
    }

    async function create(body) {
        const auth = {
            email: body.email,
            password: await bcrypt.hash(body.password, 7),
            userId: body.userId,
            createdAt: new Date(),
        }
        return store.insert(TABLA, auth);
    }

    async function update(body) {
        const auth = {
            email: body.email,
        }
        return store.update(TABLA, auth);
    }

    async function login(username, password) {
        const hash = await store.query(TABLA, { email: username });
        return bcrypt.compare(password, hash[0].password).then(res => {
            if (res === true) {
                return { token: auth.sing({ username, password }) }
            } else {
                throw new Error('Informacion invalida');
            }
        });
    }

    return {
        login,
        upsert,
        create,
        update,
    };
}