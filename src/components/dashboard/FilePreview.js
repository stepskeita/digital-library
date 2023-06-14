import React from "react";
import { MdDelete } from "react-icons/md";

const FilePreview = ({ file, reset }) => {
  return (
    <div className="p-2 px-3 flex flex-col md:items-stretch md:flex-row">
      <div className="w-48">
        {file.name.includes(".pdf") ? (
          <img className="w-full" src="/img/pdf-icon.png" alt={file.name} />
        ) : (
          <img
            className="w-full"
            src={URL.createObjectURL(file)}
            alt={file.name}
          />
        )}
      </div>
      <div className="flex-1 p-2 md:px-4 flex flex-col justify-center">
        <p className="mb-2 text-sm">{file.name}</p>
        <button
          onClick={() => reset()}
          className="text-red-600 hover:text-red-500 my-3 w-fit"
        >
          <MdDelete className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default FilePreview;
