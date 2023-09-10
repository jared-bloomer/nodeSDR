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
    getAll,
    add,
    userDelete,
    userList
};

async function authenticate({ req, res, username, password }) {
    const user = await db.getUser(username)
    const validPass = await bcrypt.compare(password, user[0]['password']);
    if (validPass === true && username === user[0]['username']) {
        // create a jwt token that is valid for 7 days
        const token = jwt.sign({ sub: user.id, role: user[0]['role'] }, config.get('secret'), { expiresIn: '7d' });

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

async function add({ username, password, fname, lname, role }) {
    const userAdd = db.addUser(username, password, fname, lname, role);
    return userAdd;
}

async function userDelete({ username }) {
    const userDel = db.delUser(username);
    return userDel;
}

async function userList() {
    const userList = db.listAllUsers();
    return userList;
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

function omitCreatedAt(user) {
    const { created_at, ...userWithoutCreated_at } = user;
    return userWithoutCreated_at;
}

function omitUpdatedAt(user) {
    const { updated_at, ...userWithoutUpdated_at } = user;
    return userWithoutUpdated_at;
}
