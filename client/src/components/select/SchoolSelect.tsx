"use client";
import { getSchoolList } from "@/services/schoool.service";
import { School } from "@/type";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  onSelectItem: (item: any) => void;
}

function SchoolSelect({ onSelectItem }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["schools"],
    queryFn: () => getSchoolList(),
  });

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const selectedSchool =
      data?.find((item: School) => item.id === selectedId) || null;
    onSelectItem(selectedSchool);
  };
  return (
    <div>
      <label
        htmlFor="school"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an school
      </label>
      <select
        onChange={handleSelectChange}
        defaultValue={""}
        id="school"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected value={""}>
          Choose a school
        </option>
        {data &&
          !isLoading &&
          data.map((item: School) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default SchoolSelect;
