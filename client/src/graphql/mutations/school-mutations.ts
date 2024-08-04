import { gql } from 'graphql-request'

const addSingleSchool = gql`
  mutation addSingleSchoolMutation($name: String, $address: String) {
    createSchool(name: $name, address: $address) {
      id
      name
    }
  }
`;

export { addSingleSchool };
