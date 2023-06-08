import React from "react";
import { useHistory } from "react-router-dom";
import Masonry from "react-masonry-css";
import BookItem from "../components/layout/BookItem";
import { BOOKS } from "../constants/books";
import Container from "../components/layout/Container";
import CustomTitle from "../components/layout/CustomTitle";

const RecentlyAdded = () => {
  const breakpointColumnsObj = {
    default: 6, // Number of columns for default view
    1100: 5, // Number of columns for viewport width >= 1100px
    700: 4, // Number of columns for viewport width >= 700px
    500: 3, // Number of columns for viewport width >= 500px
  };
  const history = useHistory();
  return (
    <Container>
      <CustomTitle title="Recently Added" />
      <h2 className="text-lg font-bold mb-7 flex items-center">
        <button
          onClick={() => history.goBack()}
          className="underline text-sky-500 mr-2"
        >
          GO BACK
        </button>
        | Recently Added
      </h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {BOOKS.map((book) => (
          <BookItem key={book.title} book={book} />
        ))}
      </Masonry>
      {/* <div className="my-3 p-2 flex items-center justify-center">
        <button
          onClick={() => history.push(`/recently-added`)}
          className="bg-sky-500 hover:bg-sky-600 text-white p-2 px-5 rounded-lg mr-2"
        >
          See more
        </button>
      </div> */}
    </Container>
  );
};

export default RecentlyAdded;
