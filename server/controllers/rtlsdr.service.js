const config = require('config');
const rtljs = require('rtljs');

async function getDeviceCount() {
    return rtljs.getDeviceCount();
}

async function getDeviceName({req, res, device}) {
    return rtljs.getDeviceName(device);
}

module.exports = {
    getDeviceCount,
    getDeviceName
};