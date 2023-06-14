import React, { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import CustomTitle from "../components/layout/CustomTitle";
import BookMarkItem from "../components/bookmarks/BookMarkItem";
import scrollToTop from "../utils/scrollToTop";
import { deleteFromBookMarks } from "../utils/utilFunctions";
import { useHistory } from "react-router-dom";

const Bookmarks = () => {
  const [booksMarks, setBookMarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks"))
  );
  const history = useHistory();
  useEffect(() => {
    scrollToTop();
  }, [history]);

  const handleDeleteFromBookMarks = (book) => {
    setBookMarks(deleteFromBookMarks(book));
  };
  return (
    <Container>
      <CustomTitle title="Bookmarks" />
      <h2 className="text-sm  mb-7 flex items-center">
        <button
          onClick={() => history.goBack()}
          className="underline text-sky-500 mr-2"
        >
          GO BACK
        </button>
        | Your Bookmarks
      </h2>

      {!booksMarks || Object.keys(booksMarks).length === 0 ? (
        <div className="">
          <p className="my-3">You have not bookmarked any books</p>
        </div>
      ) : (
        Object.keys(booksMarks).map((key) => (
          <BookMarkItem
            book={booksMarks[key]}
            key={key}
            handleDeleteFromBookMarks={handleDeleteFromBookMarks}
          />
        ))
      )}
    </Container>
  );
};

export default Bookmarks;
