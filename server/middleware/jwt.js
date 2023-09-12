const envconfig = require('config');
const { expressjwt } = require('express-jwt');

module.exports = jwt;

function jwt() {
    const secret = envconfig.get('secret');
    return expressjwt({ secret: secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            /docs/,
            '/api/users/authenticate'
        ]
    });
}