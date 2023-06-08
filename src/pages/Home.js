import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Container from "../components/layout/Container";
import PopularBooks from "../components/home/PopularBooks";
import scrollToTop from "../utils/scrollToTop";
import CustomTitle from "../components/layout/CustomTitle";
import { useDispatch, useSelector } from "react-redux";
import { SET_SEARCH_TEXT } from "../reducers/types/generalTypes";
import BookSearchItem from "../components/home/BookSearchItem";
import { searchBook } from "../action/generalAction";

const Home = () => {
  const { searchText } = useSelector((state) => state.searchText);
  const { books } = useSelector((state) => state.searchBook);

  const dispatch = useDispatch();
  useEffect(() => {
    scrollToTop();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.length > 1) {
      dispatch(searchBook());
    }
  };
  return (
    <Container>
      <CustomTitle title="Home" />
      <div className="py-7 flex items-center justify-center flex-col w-full">
        <Link to="/" className="mb-1">
          <img src="img/web-logo.png" alt="D-Lib" />
        </Link>
        <p className="mb-5 italic">Your Digital Library</p>
        <form onSubmit={handleSubmit} className="flex items-stretch w-full">
          <input
            type="text"
            value={searchText}
            onChange={(e) =>
              dispatch({ type: SET_SEARCH_TEXT, payload: e.target.value })
            }
            className="flex-1 border border-sky-500 border-r-0 focus:outline-none focus:border-2 px-2"
            placeholder="Search for title, author, category, keyword ..."
          />
          <button
            type="submit"
            className="bg-sky-500 text-white p-3 px-5 lg:px-12 border border-sky-500 hover:bg-sky-600"
          >
            Search
          </button>
        </form>
      </div>
      {books && books.length > 0 ? (
        <div className="bg-white border border-gray-800">
          {books.map((book) => (
            <BookSearchItem book={book} key={book.title} />
          ))}
        </div>
      ) : (
        <p className="p-2">No books found for your search</p>
      )}
      <PopularBooks />
    </Container>
  );
};

export default Home;
