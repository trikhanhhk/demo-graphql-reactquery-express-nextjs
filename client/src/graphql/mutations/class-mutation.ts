import { gql } from 'graphql-request'
const addSingleClass = gql`
  mutation addSingleClassMutation($name: String!, $schoolId: ID!) {
    createSchool(name: $name, schoolId: $schoolId) {
      id
      name
      school {
        id
        name
      }
    }
  }
`;

export { addSingleClass };
