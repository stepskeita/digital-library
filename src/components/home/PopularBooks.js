import React from "react";
import { BOOKS } from "../../constants/books";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Masonry from "react-masonry-css";

const PopularBooks = () => {
  const breakpointColumnsObj = {
    default: 6, // Number of columns for default view
    1100: 5, // Number of columns for viewport width >= 1100px
    700: 4, // Number of columns for viewport width >= 700px
    500: 3, // Number of columns for viewport width >= 500px
  };
  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl mb-2">Popular Books</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {BOOKS.map((book, i) => (
          <div className=" rounded-xl shadow-md overflow-hidden">
            <Link to="">
              <img src={book.coverImage} alt={book.title} className="w-full" />
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default PopularBooks;
