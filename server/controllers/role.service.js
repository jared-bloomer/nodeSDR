const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../middleware/db');

var roles = db.getAllRoles()
    .then(res=> {
        console.log("Checking Roles Table")
        if (res.length == 0) {
            console.log('admin Role not found')
            var roles = db.getRoleByName('admin')
                .then(result=> {
                    if(result.length == 0) {
                        console.log("Creating 'admin' Role")
                        db.addRole('admin')
                    }
            })
        }
    });

module.exports = {
    getAll,
    add,
    roleDelete,
    roleList
};

async function getAll() {
    return db.getAllRoles()
}

async function add({ role }) {
    const roleAdd = db.addRole(role);
    return roleAdd;
}

async function roleDelete({ role }) {
    const roleDel = db.delRole(role);
    return roleDel;
}

async function roleList() {
    const roleList = db.listAllRoles();
    return roleList;
}

// helper functions

