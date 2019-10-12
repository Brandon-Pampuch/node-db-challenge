const express = require('express')

const router = express.Router()

const db = require('./tasks-model')


router.get('/', (req, res) => {
    db.find()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.json({
                error: err,
                message: "could not find tasks"
            })
        })
})
router.post('/', (req, res) => {
    db.add(req.body)
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.json({
                error: err,
                message: "could not add task"
            })
        })
})


module.exports = router 