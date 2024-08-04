import { gql } from 'graphql-request'

const addSingleStudent = gql`
    mutation addSingleStudent(
        $name: String!
        $classId: ID!
    ) {
        createStudent(name: $name, classId: $classId) {
            id
            name
        }
    }
`

export { addSingleStudent }