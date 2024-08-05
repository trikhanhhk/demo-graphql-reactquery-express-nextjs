import { getStudentByClassId } from "@/services/student.service";
import { ClassItem, Column } from "@/type";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import TableData from "../common/TableData";

interface Props {
  classItem: ClassItem;
}

const columns: Column[] = [
  {
    name: "Student name",
    element: (row: { name: string }) => <>{row.name}</>,
  },
  {
    name: "Birthday",
    element: (row: { birthDay: Date }) => <>{row.birthDay}</>,
  },
];

function StudentList({ classItem }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["students", classItem],
    queryFn: () => getStudentByClassId(classItem.id),
  });
  return (
    <div>
      <TableData
        columns={columns}
        data={data}
        isLoading={isLoading}
        name="student_by_class"
      />
    </div>
  );
}

export default StudentList;
