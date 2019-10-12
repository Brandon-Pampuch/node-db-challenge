const express = require('express')
const projectsRouter = require('./router/projectsRouter/projectsRouter')
const tasksRouter = require('./router/tasksRouter/tasksRouter')
const resourcesRouter = require('./router/resourcesRouter/resourcesRouter')

const server = express()
server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/tasks', tasksRouter)
server.use('/api/resources', resourcesRouter)

module.exports = server