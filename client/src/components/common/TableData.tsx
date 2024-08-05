import { Column, Schools } from "@/type";
import React, { useState } from "react";

interface Props {
  name: string;
  data: any[] | undefined;
  columns: Column[];
  isLoading: boolean;
  onSelectItems?: (item: any) => void;
}

function TableData({ name, data, columns, isLoading, onSelectItems }: Props) {
  const [itemSelected, setItemSelected] = useState<any>(null);

  const renderHeader = () => {
    return columns.map((col, idx) => (
      <th key={`${name}_${idx}`} scope="col" className="px-6 py-3">
        {col.name}
      </th>
    ));
  };

  const handleSelectedItem = (item: any) => {
    if(itemSelected && item.id === itemSelected.id) {
      setItemSelected(null);
      onSelectItems && onSelectItems(null);
    } else {
      setItemSelected(item);
      onSelectItems && onSelectItems(item);
    }
  }

  const renderData = () => {
    if (typeof data === "undefined") return null;
    return data?.map((item) => (
      <tr
        key={item.id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-100"
      >
        {columns.map((col, idx) => (
          <td
            key={`${item.id}_${idx}`}
            className="px-6 py-4"
            onClick={() => handleSelectedItem(item)}
          >
            {col.element(item)}
          </td>
        ))}
      </tr>
    ));
  };
  return (
    <div>
      {isLoading && (
        <div role="status" className="mt-6 animate-pulse">
          <div className="mb-4 h-4  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {!isLoading && (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>{renderHeader()}</tr>
            </thead>
            <tbody>{renderData()}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TableData;
