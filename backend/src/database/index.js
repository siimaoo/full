const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/apict', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

mongoose.Promise = global.Promise

module.exports = mongoose