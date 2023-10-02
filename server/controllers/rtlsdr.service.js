const config = require('config');
const rtljs = require('rtljs');

async function getDeviceCount() {
    return rtljs.getDeviceCount();
}

async function getDeviceName(req) {
    return rtljs.getDeviceName(req.body);
}

module.exports = {
    getDeviceCount,
    getDeviceName
};