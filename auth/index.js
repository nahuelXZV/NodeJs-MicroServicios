// libs
const jwt = require('jsonwebtoken');
const config = require('../config');

// projects files
const error = require('../utils/error');
const secret = config.jwt.secret;

// functions
function sing(data) {
    return jwt.sign(data, secret);
}

const check = {
    own: function (req, owner) {
        const decoded = decodeHeader(req);
        if (decoded.id !== owner) {
            throw error('No puedes hacer esto', 401);
        }
    }
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);
    req.user = decoded;
    return decoded;
}

function getToken(authorization) {
    if (!authorization) {
        throw error('No viene token', 401);
    }
    if (authorization.indexOf('Bearer ') === -1) {
        throw error('Formato invalido', 401);
    }
    let token = authorization.replace('Bearer ', '');
    return token;
}

function verify(token) {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        throw error('Token invalido', 401);
    }
}

module.exports = {
    sing,
    check,
};