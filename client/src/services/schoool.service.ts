import { graphQLClient } from "@/graphql/graphql";
import { addSingleSchool } from "@/graphql/mutations/school-mutations";
import { getSchools, getSingleSchool } from "@/graphql/queries/school-queries";

export const addSchool = async (school: { name: string, address: string }) => {
  const data = await graphQLClient.request(addSingleSchool, school);
  return data;
};

export const getSchoolList = async () => {
  const data = await graphQLClient.request<any>(getSchools);
  return data.schools
};

export const getSchoolById = async (id: string) => {
  const data = await graphQLClient.request<any>(getSingleSchool, {
    id,
  });

  return data.school
};
