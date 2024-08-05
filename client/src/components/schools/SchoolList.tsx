import { getSchoolList } from "@/services/schoool.service";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import TableData from "../common/TableData";
import { Column, School } from "@/type";

const columns: Column[] = [
  {
    name: "School name",
    element: (row: { name: string }) => <>{row.name}</>,
  },

  {
    name: "Address",
    element: (row: { address: string }) => <>{row.address}</>,
  },
];

interface Props {
  onSelectItem: (item: School) => void;
  refesh: number;
}

function SchoolList({ onSelectItem, refesh = Date.now() }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["schools", refesh],
    queryFn: () => getSchoolList(),
  });

  return (
    <div>
      <TableData
        name="schools"
        columns={columns}
        data={data}
        isLoading={isLoading}
        onSelectItems={onSelectItem}
      />
    </div>
  );
}

export default SchoolList;
