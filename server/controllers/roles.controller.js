const express = require('express');
const router = express.Router();
const roleService = require('./role.service');
const { requireAdmin } = require('../middleware/requireRole');

// routes
router.post('/createrole', requireAdmin, add);
router.post('/delete', requireAdmin, roleDelete);
router.post('/list', requireAdmin, roleList);

module.exports = router;

function add(req, res, next) {
    roleService.add(req.body)
        .then(roles => res.json(roles))
        .catch(next);
}

function roleDelete(req, res, next) {
    roleService.roleDelete(req.body)
        .then(roles => res.json(roles))
        .catch(next);
}

function roleList(req, res, next) {
    roleService.roleList()
        .then(roles => res.json(roles))
        .catch(next);
}
