const express = require('express')
const projectsRouter = require('./router/ProjectsRouter')

const server = express()
server.use(express.json())

server.use('/api', projectsRouter)

module.exports = server