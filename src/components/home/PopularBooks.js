import React from "react";
import { BOOKS } from "../../constants/books";
import { Link, useHistory } from "react-router-dom";
import Masonry from "react-masonry-css";

const PopularBooks = () => {
  const breakpointColumnsObj = {
    default: 6, // Number of columns for default view
    1100: 5, // Number of columns for viewport width >= 1100px
    700: 4, // Number of columns for viewport width >= 700px
    500: 3, // Number of columns for viewport width >= 500px
  };
  const history = useHistory();

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl mb-2">Popular Books</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {BOOKS.map((book) => (
          <div
            key={book.title}
            className=" rounded-xl shadow-md overflow-hidden"
          >
            <Link to={`/book/${book.title.toLowerCase().split(" ").join("-")}`}>
              <img src={book.coverImage} alt={book.title} className="w-full" />
            </Link>
          </div>
        ))}
      </Masonry>
      <div className="my-3 p-2 flex items-center justify-center">
        <button
          onClick={() => history.push(`/recently-added`)}
          className="bg-sky-500 hover:bg-sky-600 text-white p-2 px-5 rounded-lg mr-2"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default PopularBooks;
