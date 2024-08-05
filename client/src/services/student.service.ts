import { graphQLClient } from "@/graphql/graphql";
import { addSingleStudent } from "@/graphql/mutations/student-mutation";
import { getStudentByClass } from "@/graphql/queries/student-queries";

export const getStudentByClassId = async (classId: string) => {
  const data = await graphQLClient.request<any>(getStudentByClass, { classId });
  return data.class.students;
};

export const addStudent = async(student: {
  name: string,
  birthDay: string,
  classId: string
}) => {
  const data = await graphQLClient.request<any>(addSingleStudent, student)
  return data.student
}
