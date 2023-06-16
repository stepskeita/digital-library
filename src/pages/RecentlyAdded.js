import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Masonry from "react-masonry-css";
import BookItem from "../components/layout/BookItem";
import Container from "../components/layout/Container";
import CustomTitle from "../components/layout/CustomTitle";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../action/bookAction";
import Pagination from "../components/layout/Pagination";
import { backendApiUrl } from "../constants/url";
import Spinner from "../components/loaders/Spinner";
import ErrorAlert from "../components/layout/ErrorAlert";
import { GET_BOOKS_RESET } from "../reducers/types/bookTypes";

const RecentlyAdded = () => {
  const { loading, books, error, total, page } = useSelector(
    (state) => state.getBooks
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

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
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorAlert
          text={error}
          handleClose={() => dispatch({ type: GET_BOOKS_RESET })}
        />
      ) : (
        books && (
          <>
            <h2 className="text-sm mb-7 flex items-center">
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
              {books.map((book) => (
                <BookItem key={book.title} book={book} />
              ))}
            </Masonry>

            <Pagination
              total={total}
              page={page}
              prevAction={(prevPage) =>
                dispatch(getBooks(`${backendApiUrl}/book?page=${prevPage}`))
              }
              nextAction={(nextPage) =>
                dispatch(getBooks(`${backendApiUrl}/book?page=${nextPage}`))
              }
            />
          </>
        )
      )}
    </Container>
  );
};

export default RecentlyAdded;
