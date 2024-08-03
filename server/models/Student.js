const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StudentSchema = new Schema({
    name: {
        type: String
    },

    birthDay: {
        type: Date
    },

    age: {
        type: Number
    },

    classId: {
        type: String
    }
})

module.exports = mongoose.model('students', StudentSchema)