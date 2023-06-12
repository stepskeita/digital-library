import React from "react";

const TextInput = ({ id, label, required, ...rest }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className={`mb-1 block ${
          required && "after:content-['*'] after:ml-2 after:text-red-600"
        }`}
      >
        {label}
      </label>
      <input
        required={required}
        type="text"
        className="p-2 outline-none border focus:border-sky-500 border-sky-500/20 px-3 block w-full"
        {...rest}
      />
    </div>
  );
};

export default TextInput;
