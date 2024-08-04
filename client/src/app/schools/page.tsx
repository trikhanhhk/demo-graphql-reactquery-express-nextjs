'use client'
import DetailSchool from "@/components/schools/DetailSchool";
import SchoolForm from "@/components/schools/SchoolForm";
import SchoolList from "@/components/schools/SchoolList";
import { getSchoolList } from "@/services/Schoool.Service";
import React, { useEffect } from "react";

function SchoolPage() {
  const fetchSchoolList = async () => {
    await getSchoolList();
  };
  useEffect(() => {
    fetchSchoolList();
  }, []);
  return (
    <div className="w-full">
      <div className="mb-3 text-gray-500 dark:text-gray-400">School Page</div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="col-span-1">
          <div className="mb-3 text-gray-500 dark:text-gray-400">
            <SchoolList />
          </div>
        </div>
        <div className="mb-3 text-gray-500 dark:text-gray-400">
          <DetailSchool />
        </div>
      </div>
      <div className="mb-3 text-gray-500 dark:text-gray-400">
        <SchoolForm />
      </div>
    </div>
  );
}

export default SchoolPage;
