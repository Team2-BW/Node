require('dotenv').config()

const express = require('express')
const server = express()

const cors = require('cors')
const helmet = require('helmet')
const roomsRouter = require('../router/roomsRouter')
const currentRouter = require('../router/currentRouter')



server.use(express.json())
server.use(cors())
server.use(helmet()) 

server.use('/api/rooms', roomsRouter)
server.use('/api/current', currentRouter)

server.get('/', (req, res) => {
    res.status(200).send("We are live!")
})


module.exports = server