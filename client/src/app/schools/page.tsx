"use client";
import DetailSchool from "@/components/schools/DetailSchool";
import SchoolForm from "@/components/schools/SchoolForm";
import SchoolList from "@/components/schools/SchoolList";
import { School } from "@/type";
import { useState } from "react";

function SchoolPage() {
  const [selectedItem, setSelectedItem] = useState<School | null>(null);
  const [refesh, setrefesh] = useState<number>(Date.now());

  return (
    <div className="w-full">
      <div className="mb-3 text-gray-500 dark:text-gray-400">School Page</div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="col-span-1">
          <div className="mb-3 text-gray-500 dark:text-gray-400">
            <SchoolList onSelectItem={setSelectedItem} refesh={refesh} />
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-3 text-gray-500 dark:text-gray-400">
            <DetailSchool selectedItem={selectedItem} />
          </div>
          <div className="mb-3 text-gray-500 dark:text-gray-400">
            <SchoolForm onSuccess={() => setrefesh(Date.now())} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchoolPage;
