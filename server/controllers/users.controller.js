const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const { requireAdmin } = require('../middleware/requireRole');

// routes
router.post('/authenticate', authenticate);
router.get('/', getAll);
router.post('/add', requireAdmin, add);
router.post('/delete', requireAdmin, userDelete);
router.post('/list', requireAdmin, userList);

module.exports = router;

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function add(req, res, next) {
    userService.add(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function userDelete(req, res, next) {
    userService.userDelete(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function userList(req, res, next) {
    userService.userList()
        .then(user => res.json(user))
        .catch(next);
}
