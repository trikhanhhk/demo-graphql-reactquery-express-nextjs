const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClassSchema = new Schema({
    name: {
        type: String
    },

    schoolId: {
        type: String
    }
})

module.exports = mongoose.model('classes', ClassSchema)