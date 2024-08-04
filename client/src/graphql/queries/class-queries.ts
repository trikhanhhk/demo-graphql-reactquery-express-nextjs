import { gql } from 'graphql-request'

export const getClasses = gql`
    query getClassesQuery {
        classes {
            id
            name
        }
    }
`

export const getClassesBySchool = gql`
    query getClassesBySchoolQuery($schoolId: ID!) {
        school(id: $schoolId) {
            classes {
                id
                name
            }
        }
    }
`

export const getClass = gql`
    query getClassQuery($id: ID!) {
        class(id: $id) {
            id
            name
            school {
                id
                name
                address
            }
        }
    }
`
