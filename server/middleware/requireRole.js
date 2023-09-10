const db = require('../middleware/db');
const jwt = require('jsonwebtoken');

async function requireAdmin(request, response, next) {
    const token = request.headers['authorization'].split(" ");
    const req = jwt.decode(token[1]);
    const userRole = req['role'];
    const role = await db.getRoleById(userRole);
    const foundRole = role[0]['role'];

    if (foundRole != 'admin') {
        response.json({message: 'Permission denied.' });
    }
    else {
        next();
    }
};

module.exports = {
    requireAdmin
}