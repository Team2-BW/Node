require('dotenv').config()

const express = require('express')
const server = express()

const cors = require('cors')
const helmet = require('helmet')
const roomsRouter = require('../router/roomsRouter')


server.use(express.json())
server.use(cors())
server.use(helmet()) 

server.use('/api/rooms', roomsRouter)

server.get('/', (req, res) => {
    res.status(200).send("We are live!")
})


module.exports = server