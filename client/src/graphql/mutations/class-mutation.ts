import { gql } from 'graphql-request'
const addSingleClass = gql`
  mutation CreateClass($name: String!, $schoolId: ID!) {
  createClass(name: $name, schoolId: $schoolId) {
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
