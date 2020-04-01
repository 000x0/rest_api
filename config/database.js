const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/rest', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})