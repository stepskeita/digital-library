import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import BookItem from "./BookItem";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../action/bookAction";

const JustForYou = ({ slug }) => {
  const { loading, books, error } = useSelector((state) => state.getBooks);
  const [filteredBooks, setFilteredBooks] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  useEffect(() => {
    if (books) {
      setFilteredBooks(
        books.filter((book) => (book._id !== slug ? book : null))
      );
    }
  }, [books, slug]);

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
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          filteredBooks &&
          filteredBooks.map((book) => <BookItem key={book.title} book={book} />)
        )}
      </Masonry>
    </div>
  );
};

export default JustForYou;
