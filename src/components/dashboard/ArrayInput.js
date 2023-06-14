import React from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ArrayInput = ({ inputValue, setInputValue, id }) => {
  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const list = [...inputValue];
    list[index] = value;
    setInputValue(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputValue];
    list.splice(index, 1);
    setInputValue(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputValue([...inputValue, ""]);
  };
  return (
    <div className="mb-5">
      {inputValue.map((value, i) => (
        <div key={`${id}-${i}`} className="flex items-stretch my-3">
          <input
            className="p-2 outline-none border focus:border-sky-500 border-sky-500/20 px-3 block w-full"
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e, i)}
            required
          />
          <div className="flex items-center">
            {inputValue.length !== 1 && (
              <button
                type="button"
                onClick={() => handleRemoveClick(i)}
                className="p-2  mx-1 h-full w-fit  border-0 outline-0  uppercase text-sm bg-red-700 hover:bg-red-800 text-white"
              >
                <MdDelete className="text-lg" />
              </button>
            )}
            {inputValue.length - 1 === i && (
              <button
                type="button"
                className="p-2  mx-1 h-full w-fit border-0 outline-0  uppercase text-sm bg-green-700 hover:bg-green-800 text-white"
                onClick={handleAddClick}
              >
                <FaPlus className="text-lg" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArrayInput;
