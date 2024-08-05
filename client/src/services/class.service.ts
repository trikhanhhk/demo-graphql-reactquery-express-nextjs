import { graphQLClient } from "@/graphql/graphql";
import { addSingleClass } from "@/graphql/mutations/class-mutation";
import { getClass, getClassesBySchool } from "@/graphql/queries/class-queries";

export const getClassesBySchoolId = async (schoolId: string) => {
  console.log("schoolId", schoolId)
  const data = await graphQLClient.request<any>(getClassesBySchool, {
    schoolId: schoolId,
  });

  return data.school.classes
};

export const addClass = async (newClass: {name: string, schoolId: string}) => {
    console.log("newClass", newClass)
    const data = await graphQLClient.request<any>(addSingleClass, newClass)
    return data.class
}

export const getClassById = async (classId: string) => {
    const data = await graphQLClient.request<any>(getClass, {id: classId})
    return data.classes
}
