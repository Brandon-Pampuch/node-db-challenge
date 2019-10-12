const db = require('./dbconfig')

module.exports = {
    find,
    add,
}

function find() {
    return db('resources')
}

function add(resource) {
    return db('resources').input(resource)
}