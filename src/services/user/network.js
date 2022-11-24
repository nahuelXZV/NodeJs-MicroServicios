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

router.post('/', create);

router.put('/:id', secure('update'), update);

router.delete('/:id', destroy);

// functions
function list(req, res, next) {
    console.log('list');
    Controller.list().then(
        (list) => { response.success(req, res, list, 200); }
    ).catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id).then(
        (user) => { response.success(req, res, user, 200); }
    ).catch(next);
}

function create(req, res, next) {
    Controller.create(req.body).then(
        (user) => { response.success(req, res, user, 201); }
    ).catch(next);
}

function update(req, res, next) {
    Controller.update(req.body, req.params.id).then(
        (user) => { response.success(req, res, user, 200); }
    ).catch(next);
}

function destroy(req, res, next) {
    Controller.destroy(req.params.id).then(
        (user) => { response.success(req, res, user, 200); }
    ).catch(next);
}

module.exports = router;