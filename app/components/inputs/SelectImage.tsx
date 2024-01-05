"use client";

import { ImageType } from "@/app/admin/add-products/AddProductForm";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface SelectImageProps {
  item?: ImageType;
  handelFileChange: (value: File) => void;
}

const SelectImage: React.FC<SelectImageProps> = ({
  item,
  handelFileChange,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handelFileChange(acceptedFiles[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".png"] },
  });
  return (
    <div
      {...getRootProps()}
      className=" border-2 border-slate-400 p-2 border-dashed cursor-pointer text-sm font-normal text-slate-400 flex items-center justify-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop an image</p> : <p>+ {item?.color} image</p>}
    </div>
  );
};

export default SelectImage;
