const express = require('express')
const bodyParser = require('body-parser')

const server = express()
const port = 4000

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(process.env.PORT || port, function () {
    console.log('Listening on')
})

module.exports = server