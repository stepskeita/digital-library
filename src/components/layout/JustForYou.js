import React from "react";
import { BOOKS } from "../../constants/books";
import Masonry from "react-masonry-css";
import BookItem from "./BookItem";

const JustForYou = ({ slug }) => {
  const breakpointColumnsObj = {
    default: 6, // Number of columns for default view
    1100: 5, // Number of columns for viewport width >= 1100px
    700: 4, // Number of columns for viewport width >= 700px
    500: 3, // Number of columns for viewport width >= 500px
  };
  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl text-sky-500">
        You may be interested in
      </h2>
      <div className="mb-3 h-0.5 bg-sky-500"></div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {BOOKS.map(
          (book) =>
            slug !== book.title.toLowerCase().split(" ").join("-") && (
              <BookItem key={book.title} book={book} />
            )
        )}
      </Masonry>
    </div>
  );
};

export default JustForYou;
