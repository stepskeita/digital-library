import React from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { backendUrl } from "../../constants/url";

const BookMarkItem = ({ book, handleDeleteFromBookMarks }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 w-full flex flex-col md:flex-row my-7 md:my-5">
      <div className="md:w-64 h-64 md:h-48">
        <Link
          to={`/book/${book._id}`}
          className="relative h-full w-full hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:w-full hover:after:h-full hover:after:bg-white/30"
        >
          <img
            src={`${backendUrl}/${book.coverImage}`}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="p-3 md:flex-1">
        <Link className="mb-2" to={`/book/${book._id}`}>
          <h5 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-500 hover:underline">
            {book.title}
          </h5>
        </Link>
        <p className="text-gray-800 my-2 text-sm">
          <span>Author(s):</span>{" "}
          {book.authors.map((author) => (
            <Link
              key={author}
              to={`/author/${author}`}
              className="mx-1 underline hover:text-sky-700 capitalize"
            >
              {author}
            </Link>
          ))}
        </p>
        <p className="text-gray-800 my-2 text-sm">
          <span>Categories:</span>{" "}
          {book.categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category}`}
              className="mx-1 underline hover:text-sky-700 capitalize"
            >
              {category}
            </Link>
          ))}
        </p>
        <p className="text-gray-800 my-2 text-sm">
          <span>Keywords:</span>{" "}
          {book.keywords.map((keyword) => (
            <Link
              key={keyword}
              to={`/keyword/${keyword}`}
              className="mx-1 underline hover:text-sky-700 capitalize"
            >
              {keyword}
            </Link>
          ))}
        </p>
        <div className="mt-5">
          <button
            onClick={() => handleDeleteFromBookMarks(book)}
            className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-xl flex items-center"
          >
            <FaTrash className="mr-2" /> Remove from bookmark
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookMarkItem;
