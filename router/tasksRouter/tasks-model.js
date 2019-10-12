const db = require('./dbconfig')

module.exports = {
    find,
    add
}

function find() {
    return db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('project', 'projects.description as project_description', 'notes', 'completed', 'tasks.description as task_description')
}

function add(resource) {
    return db('tasks').input(resource)
}