import React from "react";
import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden">
      <Link
        className="relative w-full h-full hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:w-full hover:after:h-full hover:after:bg-white/30"
        to={`/book/${book.title.toLowerCase().split(" ").join("-")}`}
      >
        <img src={book.coverImage} alt={book.title} className="w-full" />
      </Link>
    </div>
  );
};

export default BookItem;
