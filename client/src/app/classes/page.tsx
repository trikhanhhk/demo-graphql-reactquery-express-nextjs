"use client";
import ClassForm from "@/components/classes/ClassForm";
import ListClass from "@/components/classes/ListClass";
import SchoolSelect from "@/components/select/SchoolSelect";
import StudentForm from "@/components/students/StudentForm";
import StudentList from "@/components/students/StudentList";
import { ClassItem, School } from "@/type";
import React, { use, useState } from "react";

function ClassPage() {
  const [refresh, setRefresh] = useState<number>(Date.now());
  const [refreshStudent, setRefreshStudent] = useState<number>(Date.now());
  const [itemSelected, setItemSelected] = useState<ClassItem | null>(null);
  const [schoolSelected, setSchoolSelected] = useState<School | null>(null);

  return (
    <div className="w-full">
      <div className="mb-3 text-gray-500 dark:text-gray-400">Class Page</div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="col-span-1">
          <SchoolSelect onSelectItem={setSchoolSelected} />
          <div className="mb-3 text-gray-500 dark:text-gray-400">
            {schoolSelected && (
              <>
                <ListClass
                  schoolSelected={schoolSelected}
                  onSelectedItem={setItemSelected}
                  refresh={refreshStudent}
                />
              </>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-3 text-gray-500 dark:text-gray-400">
            {itemSelected && (
              <>
                <StudentForm
                  classId={itemSelected?.id}
                  onSuccess={() => setRefreshStudent(Date.now())}
                />
                <StudentList classItem={itemSelected} />
              </>
            )}
          </div>
          <div className="mb-3 text-gray-500 dark:text-gray-400">
            {schoolSelected && (
              <ClassForm
                onSuccess={() => setRefresh(Date.now())}
                schoolId={schoolSelected?.id}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassPage;
