const db = require('./dbconfig')

module.exports = {
    find,
    add
}

function find() {
    return db('projects')
}
function add(resource) {
    return db('projects').input(resource)
}