import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BookSearchItem = ({ book }) => {
  return (
    <div className="border-t border-gray-300 p-3 flex items-stretch hover:shadow-sm hover:shadow-sky-500">
      <div className="w-36 h-40">
        <Link
          className="h-full w-full"
          to={`/book/${book.title.toLowerCase().split(" ").join("-")}`}
        >
          <img
            src={book.coverImage}
            className="w-full h-full object-scale-down"
            alt=""
          />
        </Link>
      </div>
      <div className="flex-1 px-4">
        <Link
          to={`/book/${book.title.toLowerCase().split(" ").join("-")}`}
          className="font-semibold underline block mb-3"
        >
          {book.title}
        </Link>
        <div className="flex items-center mb-3">
          {book.authors.map((author) => (
            <Link
              key={author}
              className="hover:text-sky-500 text-gray-700 mx-1"
              to={`/author/${author.toLowerCase().split(" ").join("-")}`}
            >
              {author}
            </Link>
          ))}
        </div>
        <p className="text-gray-800 mb-2 text-sm">
          <span>Categories:</span>{" "}
          {book.categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category.toLowerCase().split(" ").join("-")}`}
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
              to={`/keyword/${keyword.toLowerCase().split(" ").join("-")}`}
              className="mx-1 underline hover:text-sky-700 capitalize"
            >
              {keyword}
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default BookSearchItem;
