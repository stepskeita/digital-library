import React from "react";

const FileInput = ({ id, label }) => {
  return (
    <div className="mb-3">
      <label
        className="w-full mb-1 border border-sky-500/20 focus:border-sky-500 h-40 bg-white bg-transparent p-2 flex items-center justify-center font-bold cursor-pointer text-center"
        htmlFor={id}
      >
        {label}
      </label>
      <input type="file" id={id} hidden />
    </div>
  );
};

export default FileInput;
