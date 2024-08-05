export type Column = {
  name: string | JSX.Element;
  element: (row: any) => JSX.Element;
};

export interface ClassItem {
  id: string
  name: string
  school: School
  students: Pick<Student, "id" | "name" | "birthDay">[]
}

export interface Student {
  id: string
  name: string
  class: ClassItem
  birthDay: string
}
export interface School {
  id: string;
  name: string;
  address: string;
  classes: Pick<ClassItem, "id" | "name">[]
}

export type Schools = Pick<School, "id" | "name" | "address">[];
