// libs
const express = require('express');

// project files
const response = require('../../../network/response');
const Controller = require('./index');
const secure = require('./secure');

// init express
const router = express.Router();

// Routes
router.get('/', list);

router.get('/:id', get);

router.post('/', upsert);

router.put('/', secure('update'), upsert);

// functions
function list(req, res, next) {
    Controller.list().then(
        (list) => { response.success(req, res, list, 200); }
    ).catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id).then(
        (user) => { response.success(req, res, user, 200); }
    ).catch(next);
}

function upsert(req, res, next) {
    Controller.upsert(req.body).then(
        (user) => { response.success(req, res, user, 201); }
    ).catch(next);
}

module.exports = router;