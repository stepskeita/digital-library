import React from "react";

const Pagination = ({ total, page, prevAction, nextAction }) => {
  const pages = Array.from({ length: total }, (value, index) => index + 1);
  return total > 1 ? (
    <div className=" flex w-fit mx-auto  border-t border-sky-500/20 py-7">
      <button
        disabled={page === 1}
        onClick={() => prevAction(page - 1)}
        className="p-2 text-lg px-4 hover:bg-sky-100  mx-1 text-black disabled:cursor-not-allowed"
      >
        Previous
      </button>
      {pages.map((currNum) => (
        <button
          disabled={currNum === page}
          key={`pagination-key-${currNum}`}
          onClick={() =>
            currNum < page
              ? prevAction(currNum)
              : currNum > page
              ? nextAction(currNum)
              : null
          }
          className={`p-1 px-3 mx-1 text-black hover:bg-sky-100 ${
            currNum === page && "bg-sky-500 hover:bg-sky-500 text-white"
          }`}
        >
          {currNum}
        </button>
      ))}

      <button
        disabled={page === total}
        onClick={() => nextAction(page + 1)}
        className="p-2 text-lg px-4 hover:bg-sky-100  mx-1 text-black disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  ) : null;
};

export default Pagination;
