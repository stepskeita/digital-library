import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import CustomTitle from "../components/layout/CustomTitle";
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../action/bookAction";
import { backendApiUrl, backendUrl } from "../constants/url";
import scrollToTop from "../utils/scrollToTop";
import Pagination from "../components/layout/Pagination";

const CategorySearch = () => {
  const { slug } = useParams();
  const { loading, books, error, total, page } = useSelector(
    (state) => state.getBooks
  );
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks(`${backendApiUrl}/book?category=${slug}`));
    scrollToTop();
  }, [dispatch, slug]);
  return (
    <Container>
      <CustomTitle title={`Category: ${slug}`} />
      <div className="flex items-center text-sm mb-5">
        <button
          onClick={() => history.goBack()}
          className="underline text-sky-500 mr-2 whitespace-nowrap"
        >
          GO BACK
        </button>
        <>
          <span className="ml-1 mr-2">|</span>
          <p className="truncate">
            Category: <span className="font-bold">{slug}</span>
          </p>
        </>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        books && (
          <>
            {books.map((book) => (
              <div
                key={book._id}
                className="bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 w-full flex flex-col md:flex-row my-7 md:my-5"
              >
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
                </div>
              </div>
            ))}
            <Pagination
              total={total}
              page={page}
              prevAction={(prevPage) =>
                dispatch(
                  getBooks(
                    `${backendApiUrl}/book?category=${slug}&page=${prevPage}`
                  )
                )
              }
              nextAction={(nextPage) =>
                dispatch(
                  getBooks(
                    `${backendApiUrl}/book?category=${slug}&page=${nextPage}`
                  )
                )
              }
            />
          </>
        )
      )}
    </Container>
  );
};

export default CategorySearch;
