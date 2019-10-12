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

module.exports = router 