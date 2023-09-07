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

async function getAllUsers() {
    var query = await db('users').join('roles', 'users.role', '=', 'roles.id').select('users.id', 'users.username', 'users.password', 'users.firstname', 'users.lastname', 'roles.role', 'users.updated_at')
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

async function delUser(req, res, next) {
    return next()
}

async function updateUserRole(req, res, next) {
    return next()
}

async function getAllRoles(req, res, next) {
    var query = await db('roles').select()
    return query
}

async function getRoleByName(role) {
    var query = await db('roles').select("id").where('role', role)
    return query
}

async function addRole(role) {
    var query = await db('roles').insert({role: role})
    return query
}

async function delRole(req, res, next) {
    return next()
}

async function updateRole(req, res, next) {
    return next()
}

async function roleAuth(roleName, res, req, next) {
        //const userRecord = await db('users').join('roles', 'users.role', '=', 'roles.id').select('users.callsign', 'roles.role').where('users.callsign', user ))
        return next()
}

module.exports = {
    getAllUsers,
    getUser,
    getUserByID,
    addUser,
    delUser,
    updateUserRole,
    getAllRoles,
    getRoleByName,
    addRole,
    delRole,
    updateRole,
    hashPassword,
    roleAuth
}