import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import BookItem from "../layout/BookItem";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../action/bookAction";
import { backendApiUrl } from "../../constants/url";
import Pagination from "../layout/Pagination";

const PopularBooks = () => {
  const { loading, books, error, total, page } = useSelector(
    (state) => state.getBooks
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks(`${backendApiUrl}/book?popular=true`));
  }, [dispatch]);

  const breakpointColumnsObj = {
    default: 6, // Number of columns for default view
    1100: 5, // Number of columns for viewport width >= 1100px
    700: 4, // Number of columns for viewport width >= 700px
    500: 3, // Number of columns for viewport width >= 500px
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl text-sky-500">Popular Books</h2>
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
          books &&
          books.map((book) => <BookItem key={book.title} book={book} />)
        )}
      </Masonry>

      <Pagination
        total={total}
        page={page}
        prevAction={(prevPage) =>
          dispatch(
            getBooks(`${backendApiUrl}/book?popular=true&page=${prevPage}`)
          )
        }
        nextAction={(nextPage) =>
          dispatch(
            getBooks(`${backendApiUrl}/book?popular=true&page=${nextPage}`)
          )
        }
      />
    </div>
  );
};

export default PopularBooks;
