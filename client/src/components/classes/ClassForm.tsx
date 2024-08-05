import { addClass } from "@/services/class.service";
import { ClassItem } from "@/type";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

type FormStateType = Omit<ClassItem, "id" | "school" | "students"> | ClassItem;

const initialFormState: FormStateType = {
  name: "",
};

interface Props {
  schoolId: string;
  onSuccess: () => void;
}

function ClassForm({ schoolId, onSuccess }: Props) {
  const [formState, setFormState] = useState<FormStateType>(initialFormState);

  const addClassMutation = useMutation({
    mutationFn: (body: FormStateType) => {
      return addClass({
        ...formState,
        schoolId
      });
    },
  });

  const handleChange =
    (name: keyof FormStateType) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({ ...prev, [name]: event.target.value }));
      if (addClassMutation.data) {
        addClassMutation.reset();
      }
    };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addClassMutation.mutate(formState, {
      onSuccess: () => {
        setFormState(initialFormState);
        onSuccess();
        alert("Success");
      },
      onError: () => {
        alert("Error");
      },
    });
  };
  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          id="class_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={formState.name}
          onChange={handleChange("name")}
          required
        />
        <label
          htmlFor="class_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Class name
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default ClassForm;
