import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { BOOKS } from "../constants/books";
import Container from "../components/layout/Container";
import JustForYou from "../components/layout/JustForYou";
import CustomTitle from "../components/layout/CustomTitle";
import scrollToTop from "../utils/scrollToTop";
import { addToBookMarks } from "../utils/utilFunctions";
import SuccessAlert from "../components/layout/CustomAlert";

const Book = () => {
  const { slug } = useParams();
  const history = useHistory();
  const [addedToBookMark, setAddedToBookMark] = useState();
  const [book, setBook] = useState(
    BOOKS.find((book) => book.title.toLowerCase().split(" ").join("-") === slug)
  );

  useEffect(() => {
    setBook(
      BOOKS.find(
        (book) => book.title.toLowerCase().split(" ").join("-") === slug
      )
    );
    setAddedToBookMark(false);
    scrollToTop();
  }, [slug]);
  return (
    <Container>
      <Container>
        <CustomTitle title={book.title} />
        <div className="flex items-center text-sm mb-5">
          <button
            onClick={() => history.goBack()}
            className="underline text-sky-500 mr-2"
          >
            GO BACK
          </button>
          <span className="ml-1 mr-2">|</span>
          <p>{book.title}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-64">
            <img src={book.coverImage} alt={book.title} className="w-full" />
          </div>
          <div className="flex-1 py-4 lg:p-4">
            <h2 className="font-bold text-2xl mb-4">{book.title}</h2>
            <div className="flex items-center mb-3">
              {book.authors.map((author) => (
                <Link
                  key={author}
                  className="text-sky-500 hover:text-sky-700 underline mx-1"
                  to={`/author/${author.toLowerCase().split(" ").join("-")}`}
                >
                  {author}
                </Link>
              ))}
            </div>
            <p className="mb-5">{book.description}</p>
            <p className="text-gray-800 mb-2 text-sm">
              <span>Categories:</span>{" "}
              {book.categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category
                    .toLowerCase()
                    .split(" ")
                    .join("-")}`}
                  className="mx-1 underline hover:text-sky-700 capitalize"
                >
                  {category}
                </Link>
              ))}
            </p>
            <p className="text-gray-800 mb-2 text-sm">
              <span>Sub-Categories:</span>{" "}
              {book.subCategories.map((category) => (
                <Link
                  key={category}
                  to={`/sub-category/${category
                    .toLowerCase()
                    .split(" ")
                    .join("-")}`}
                  className="mx-1 underline hover:text-sky-700 capitalize"
                >
                  {category}
                </Link>
              ))}
            </p>
            <p className="text-gray-800 mb-5 text-sm">
              <span>Keywords:</span>{" "}
              {book.keywords.map((keyword) => (
                <Link
                  key={keyword}
                  to={`/keyword/${keyword.toLowerCase().split(" ").join("-")}`}
                  className="mx-1 underline hover:text-sky-700 capitalize"
                >
                  {keyword}
                </Link>
              ))}
            </p>
            {addedToBookMark && (
              <SuccessAlert
                text={
                  <p className="text-black flex items-center">
                    Book successfully added to{" "}
                    <Link to="/bookmarks" className="underline mx-2">
                      bookmarks
                    </Link>
                  </p>
                }
                handleClose={() => setAddedToBookMark(false)}
              />
            )}
            <div className="flex">
              <button
                onClick={() => history.push(`/read/${slug}`)}
                className="bg-sky-500 hover:bg-sky-600 text-white p-2 px-5 rounded-lg mr-2"
              >
                Read this book
              </button>
              <button
                onClick={() => setAddedToBookMark(addToBookMarks(book))}
                className="bg-green-500 hover:bg-green-600 text-white p-2 px-5 rounded-lg"
              >
                Add to bookmarks
              </button>
            </div>
          </div>
        </div>

        <JustForYou slug={slug} />
      </Container>
    </Container>
  );
};

export default Book;
