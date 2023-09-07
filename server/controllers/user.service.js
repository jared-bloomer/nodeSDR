const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../middleware/db');

// users hardcoded for simplicity, store in a db for production applications
//const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
var users = db.getAllUsers()
    .then(res=> {
        console.log("Checking Users Table")
        if (res.length == 0) {
            console.log('Checking Roles Table')
            var roles = db.getRoleByName('admin')
            .then(result=> {
                if(result.length == 0) {
                    console.log("Creating 'admin' Role")
                    db.addRole('admin')
                }
            })
            console.log("Creating Default admin user!")
            db.addUser('admin', 'admin', 'admin', 'admin', 'admin')
        }
    });

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const user = await db.getUser(username)
    const validPass = await bcrypt.compare(password, user[0]['password']);
    if (validPass === true && username === user[0]['username']) {
        // create a jwt token that is valid for 7 days
        const token = jwt.sign({ sub: user.id }, config.get('secret'), { expiresIn: '7d' });

        return {
            ...omitPassword(user[0]),
            token
        };
    } else {
        throw 'Username or password is incorrect';
    }
}

async function getAll() {
    return db.getAllUsers()
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}