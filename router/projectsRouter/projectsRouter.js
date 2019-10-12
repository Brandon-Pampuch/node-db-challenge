const express = require('express')

const router = express.Router()

const db = require('./projects-model')


router.get('/', (req, res) => {
    db.find()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.json({
                error: err,
                message: "could not find projects"
            })
        })
})

module.exports = router 