const config = require('config');
const rtljs = require('rtljs');

async function getDeviceCount() {
    return rtljs.getDeviceCount();
}

module.exports = {
    getDeviceCount
};