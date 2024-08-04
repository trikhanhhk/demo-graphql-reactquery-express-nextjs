import { gql } from 'graphql-request'

export const getStudents = gql`
    query getStudentsQuery {
        students {
            id
            name
            class {
                id
                name
                school {
                    id
                    name
                    address
                }
            }
        }
    }
`

export const getStudent = gql`
    query getStudentQuery ($id: ID!) {
        student(id: $id) {
            id
            name
            birthDay
            class {
                id
                name
                school {
                    id
                    name
                    address
                }
            }
        }
    }
`

export const getStudentByClass = gql`
    query getStudentByClassQuery ($classId: ID!) {
        class(id: $classId) {
            students {
                id
                name
                birthDay
            }
        }
    }
`