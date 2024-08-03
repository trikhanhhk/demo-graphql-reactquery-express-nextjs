import { Column } from "@/type";
import React from "react";

interface Props {
  name: string;
  data: any[];
  columns: Column[];
  onSelectItems: (item: any) => void;
}

function TableData({ name, data, columns, onSelectItems }: Props) {
  const renderHeader = () => {
    return columns.map((col, idx) => (
      <th key={`${name}_${idx}`} scope="col" className="px-6 py-3">
        {col.name}
      </th>
    ));
  };

  const renderData = () => {
    return data?.map((item) => (
      <tr
        key={item._id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        {columns.map((col, idx) => (
          <td
            key={`${item._id}_${idx}`}
            className="px-6 py-4"
            onClick={() => onSelectItems(item)}
          >
            {col.element(item)}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;
