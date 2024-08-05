import { getSchoolById } from "@/services/schoool.service";
import { ClassItem, School } from "@/type";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  selectedItem: School | null;
}

function DetailSchool({ selectedItem }: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["school", selectedItem],
    queryFn: () => (selectedItem?.id ? getSchoolById(selectedItem?.id) : null),
    enabled: Boolean(selectedItem),
  });

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      {isLoading && (
        <div role="status" className="mt-6 animate-pulse">
          <div className="mb-4 h-4  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {data && !isLoading && (
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.address}
          </p>
          <div>
            {data?.classes &&
              data.classes.map((item: ClassItem) => (
                <span key={item.id} className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  {item.name}
                </span>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailSchool;
