"use client";

import { FieldValues, useForm } from "react-hook-form";

const SearchBar = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();
  return (
    <div className="flex items-center">
      <input
        {...register("searchTerm")}
        type="text"
        autoComplete="off"
        placeholder="Search products"
        className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 w-80"
      />
      <button className="bg-slate-700 hover:opacity-80 text-white p-2 rounded-r-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
