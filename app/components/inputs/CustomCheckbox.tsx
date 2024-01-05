"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomCheckboxProps {
  id: string;
  label: string;
  disabled?: boolean;
  register: UseFormRegister<FieldValues>;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  label,
  disabled,
  register,
}) => {
  return (
    <div className="w-full flex flex-row gap-2 items-center">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        {...register(id)}
        placeholder=""
        className="cursor-pointer"
      />
      <label className="font-medium cursor-pointer" htmlFor={id}>
        {" "}
        {label}{" "}
      </label>
    </div>
  );
};

export default CustomCheckbox;
