const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const { requireAdmin } = require('../middleware/requireRole');

// routes
router.post('/authenticate', authenticate);
router.get('/', getAll);
router.post('/add', requireAdmin, add);

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

