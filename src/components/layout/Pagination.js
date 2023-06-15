import React from "react";

const Pagination = ({ total, page, prevAction, nextAction }) => {
  const pages = Array.from({ length: total }, (value, index) => index + 1);
  return (
    <div className=" flex w-fit mx-auto mt-7">
      <button
        disabled={page === 1}
        onClick={() => prevAction(page - 1)}
        class="p-2 text-lg px-4 hover:bg-sky-100 mx-1 text-black disabled:cursor-not-allowed"
      >
        Previous
      </button>
      {pages.map((currNum) => (
        <button
          key={`pagination-key-${currNum}`}
          onClick={() =>
            currNum < page
              ? prevAction(currNum)
              : currNum > page
              ? nextAction(currNum)
              : null
          }
          class={`p-2 text-lg px-4 hover:bg-sky-100 mx-1 text-black ${
            currNum === page && "bg-sky-500 text-white"
          }`}
        >
          {currNum}
        </button>
      ))}

      <button
        disabled={page === total}
        onClick={() => nextAction(page + 1)}
        class="p-2 text-lg px-4 hover:bg-sky-100 mx-1 text-black disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
