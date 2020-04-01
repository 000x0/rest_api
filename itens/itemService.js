const Item = require('./item')

//Create REST API, adds CRUD to Mongog`s schema
//https://medium.com/@thiagoluiz.nunes/rest-api-com-node-js-express-and-mongodb-3967c2cb25b7
Item.methods(['get', 'post', 'put', 'delete'])

//Return post/put methods updated
Item.updateOptions({ new: true, runValidators: true })

module.exports = Item