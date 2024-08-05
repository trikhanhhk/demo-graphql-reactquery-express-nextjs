import { ClassItem, School } from "@/type";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getClassesBySchoolId } from "@/services/class.service";

interface Props {
  onSelectedItem: (item: ClassItem) => void;
  refresh: number;
  schoolSelected: School;
}

function ListClass({ onSelectedItem, refresh, schoolSelected }: Props) {
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["classBySchool", refresh, schoolSelected],
    queryFn: async () => await getClassesBySchoolId(schoolSelected?.id),
  });

  const handleSelectItem = (item: ClassItem) => {
    setSelectedClassId(item.id);
    onSelectedItem(item);
  };


  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mt-5">
        {data &&
          !isLoading &&
          data.map((item: ClassItem) => (
            <span
              key={item.id}
              onClick={() => handleSelectItem(item)}
              className={`${
                selectedClassId === item.id ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-800"
              } bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-2 rounded dark:bg-blue-900 dark:text-blue-300 text-center hover:bg-blue-200`}
            >
              {item.name}
            </span>
          ))}
      </div>
    </div>
  );
}

export default ListClass;
