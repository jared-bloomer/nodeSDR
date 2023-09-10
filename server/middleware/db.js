const envconfig = require('config');
const knex = require('knex');
const bcrypt = require('bcrypt');
const timestamp = Date.now();
const http = require('http');

const environment = envconfig.get("environment");

// Point to knexfile 
const config = require('../knexfile');
const { clear } = require('console');

// connect to DB
if (environment == "development") {
    var db = knex(config.development);
} else {
    var db = knex(config.production);
}

async function hashPassword(password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        return hashedPassword
    } catch (e) {
        return e;
    }
}

async function changePassword(username, password) {
    const exist = await getUser(username)
    if (exist.length == 1) {
        var hashpw = await hashPassword(password)
        var query = await db('users').where('username', username).update({password: hashpw})
        return query
    } else {
        return { error: "User already exist!"}
    }
}

async function getAllUsers() {
    var query = await db('users').join('roles', 'users.role', '=', 'roles.id').select('users.id', 'users.username', 'users.password', 'users.firstname', 'users.lastname', 'roles.role', 'users.updated_at')
    return query
}

async function listAllUsers() {
    var query = await db('users').select('username', 'firstname', 'lastname')
    return query
}

async function getUser(username) {
    var query = await db('users').select().where('username', username)
    return query
}

async function getUserByID(id) {
    var query = await db('users').select().where('id', id)
    return query
}

async function addUser(username, password, fname, lname, role) {
    const exist = await getUser(username)
    if (exist.length == 0) {
        var userRole = await getRoleByName(role)
        var hashpw = await hashPassword(password)
        var query = await db('users').join('roles', 'roles.role', '=', role).insert({username: username, password: hashpw, firstname: fname, lastname: lname, role: userRole[0].id})
        return query
    } else {
        return { error: "User already exist!"}
    }
}

async function delUser(username) {
    if (getUser(username)) {
        var query = await db('users').where('username', username).del()
        return query
    } else {
        throw "User not found!"
    }
}

async function updateUserRole(username, role) {
    if (getUser(username)) {
        if (getRoleByName(role)) {
            var roleId = await getRoleByName(role)
            var query = await db('users').where('users.username', username).update('role', roleId[0]["id"])
            return query
        } else {
            throw "Role not found!"
        }
    } else {
        throw "User not found!"
    }
}

async function listAllRoles() {
    var query = await db('roles').select('role')
    return query
}
async function getAllRoles(req, res, next) {
    var query = await db('roles').select()
    return query
}

async function getRoleByName(role) {
    var query = await db('roles').where('role', role).select("id")
    return query
}

async function getRoleByName(role) {
    var query = await db('roles').select("id").where('role', role)
    return query
}

async function getRoleById(id) {
    var query = await db('roles').select("role").where('id', id)
    return query
}

async function addRole(role) {
    var query = await db('roles').insert({role: role})
    return query
}

async function delRole(role) {
    if (getRoleByName(role)) {
        var query = await db('roles').where('role', role).del()
        return query
    } else {
        throw "User not found!"
    }
}

async function updateRole(req, res, next) {
    return next()
}

async function roleAuth(roleName, res, req, next) {
        //const userRecord = await db('users').join('roles', 'users.role', '=', 'roles.id').select('users.callsign', 'roles.role').where('users.callsign', user ))
        return next()
}

module.exports = {
    changePassword,
    getAllUsers,
    listAllUsers,
    getUser,
    getUserByID,
    addUser,
    delUser,
    updateUserRole,
    listAllRoles,
    getAllRoles,
    getRoleByName,
    getRoleById,
    addRole,
    delRole,
    updateRole,
    hashPassword,
    roleAuth
}