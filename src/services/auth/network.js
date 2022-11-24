// libs
const express = require('express');

// project files
const response = require('../../../network/response');
const Controller = require('./index');

// init express
const router = express.Router();

// Routes
router.post('/login', login);

// functions
function login(req, res, next) {
    Controller.login(req.body.email, req.body.password).then(
        (token) => { response.success(req, res, token, 200); }
    ).catch(next);
}

module.exports = router;