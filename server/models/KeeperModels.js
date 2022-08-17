const mongoose = require('mongoose')

const keeperSchema = new mongoose.Schema({
    title: String,
    text: String
})

const keeperModel = mongoose.model('Note', keeperSchema)

module.exports = keeperModel