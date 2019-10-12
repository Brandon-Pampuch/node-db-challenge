const db = require('./dbconfig')

module.exports = {
    find,
    add,
    getResourcesByProject
}

function find() {
    return db('resources')
}

function add(resource) {
    return db('resources').input(resource)
}
function getResourcesByProject(id) {
    return db('projects')
        .join('projects_resources', 'projects_resources.project_id', 'projects.id')
        .where({ project_id: id })
        .join('resources', 'resources.id', 'projects_resources.resource_id')
        .select('projects.project', 'resources.description')
}