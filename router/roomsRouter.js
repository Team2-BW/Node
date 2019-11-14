const router = require('express').Router()
const db = require('../data/dbConfig')

router.get('/', (req, res) => {
    db('rooms').then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({Message: "There was an error gathering your room data", error})
    })
})

router.post('/', (req, res) => {
    const body = req.body
    db('rooms').insert(body).then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({Message: "There was an error posting your data", error})
    })
})

module.exports = router 