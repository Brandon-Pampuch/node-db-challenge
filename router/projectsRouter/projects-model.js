const db = require('./dbconfig')

module.exports = {
    find
}

function find() {
    return db('projects')
}