const express = require('express');
const router = express.Router();
const rtlsdrService = require('./rtlsdr.service');
const { requireAdmin } = require('../middleware/requireRole');

// routes
router.get('/getDeviceCount', requireAdmin, getDeviceCount);
router.post('/getDeviceName', requireAdmin, getDeviceName);

module.exports = router;

async function getDeviceCount(req, res, next) {
    await rtlsdrService.getDeviceCount(req.body)
        .then(device => res.json(device))
        .catch(next);
}

async function getDeviceName(req, res, next) {
    await rtlsdrService.getDeviceName(req.body)
    .then(device => res.json(device))
    .catch(next);
}