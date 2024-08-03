const { gql } = require('apollo-server-express')

var typeDefs = gql`
    type School {
        id: ID!
        name: String
        address: String
        classes: [Class]
    }

    type Class {
        id: ID!
        name: String!
        school: School
        students: [Student]
    }

    type Student {
        id: ID!
        name: String
        birthDay: String
        class: Class
    }

    #For query
    type Query {
        students: [Student]
        student(id: ID!): Student
        classes: [Class]
        class(id: ID!): Class
        schools: [School]
        school(id: ID!): School
    }

    type Mutation {
        createSchool(name: String, address: String): School
        createClass(name: String!, schoolId: ID!): Class
        createStudent(name: String, birthDay: String, classId: ID): Student
    }
`

module.exports = typeDefs;
