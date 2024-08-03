const Student = require('../models/Student')
const Class = require('../models/Class')
const School = require('../models/School')

const mongoDataMethods = {
    getAllStudents : async (condition = null) => 
        condition === null ? await Student.find() : await Student.find(condition),
    getStudentById: async id => await Student.findById(id),
    
    getAllClasses: async (condition = null) =>
        condition === null ? await Class.find() : await Class.find(condition),
    getClassById: async id => await Class.findById(id),

    getAllSchools: async (condition = null) =>
        condition === null ? await School.find() : await School.find(condition),
    getSchoolById: async id => await School.findById(id),


    createSchool: async args => {
        const newSchool = new School(args)
        return await newSchool.save()
    },

    createClass: async args => {
        const newClass = new Class(args)
        return await newClass.save()
    },

    createStudent: async args => {
        const newStudent = new Student(args)
        return await newStudent.save()
    }
}

module.exports = mongoDataMethods