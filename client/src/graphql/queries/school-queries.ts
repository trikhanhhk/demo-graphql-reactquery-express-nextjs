import { gql } from 'graphql-request'

const getSchools = gql`
  query getSchoolsQuery {
    schools {
      id
      name
      address
    }
  }
`;

const getSingleSchool = gql`
  query getSingleSchoolQuery($id: ID!) {
    school(id: $id) {
      id
      name
      address
      classes {
        id
        name
      }
    }
  }
`;

export { getSchools, getSingleSchool };
