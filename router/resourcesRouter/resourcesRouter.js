const express = require('express')

const router = express.Router()

const db = require('./resources-model')


router.get('/', (req, res) => {
    db.find()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.json({
                error: err,
                message: "could not find resources"
            })
        })
})
router.get('/:id', (req, res) => {
    db.getResourcesByProject(req.params.id)
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.json({
                error: err,
                message: "could not find resources"
            })
        })
})

//get resources by project ID


router.post('/', (req, res) => {
    db.add(req.body)
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            res.json({
                error: err,
                message: "could not add resource"
            })
        })
})

module.exports = router 