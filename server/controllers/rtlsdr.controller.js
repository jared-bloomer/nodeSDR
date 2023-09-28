const express = require('express');
const router = express.Router();
const rtlsdrService = require('./rtlsdr.service');
const { requireAdmin } = require('../middleware/requireRole');

// routes
router.get('/getDeviceCount', requireAdmin, getDeviceCount);

module.exports = router;

async function getDeviceCount(req, res, next) {
    await rtlsdrService.getDeviceCount(req.body)
        .then(roles => res.json(roles))
        .catch(next);
}
