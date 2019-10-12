const db = require('./dbconfig')

module.exports = {
    find,
    add
}

function find() {
    return db('tasks')
}

function add(resource) {
    return db('tasks').input(resource)
}