import { BOOKS } from "../constants/books";
import {
  BOOKS_CATALOG_ERROR,
  BOOKS_CATALOG_LOADING,
  BOOKS_CATALOG_SUCCESS,
  SEARCH_BOOK_ERROR,
  SEARCH_BOOK_LOADING,
  SEARCH_BOOK_SUCCESS,
} from "../reducers/types/generalTypes";

export const searchBook = () => (dispatch, getState) => {
  try {
    dispatch({
      type: SEARCH_BOOK_LOADING,
    });
    const {
      searchText: { searchText },
    } = getState();
    const searchTextLowercase = searchText.toLowerCase();
    const books = BOOKS.filter((book) => {
      const titleLowerCase = book.title.toLowerCase();
      const descriptionLowerCase = book.description.toLowerCase();
      const authorsLowerCase = book.authors.map((author) =>
        author.toLowerCase()
      );
      const categoriesLowerCase = book.categories.map((category) =>
        category.toLowerCase()
      );
      const keywordsLowerCase = book.keywords.map((keyword) =>
        keyword.toLowerCase()
      );

      if (
        titleLowerCase.includes(searchTextLowercase) ||
        descriptionLowerCase.includes(searchText) ||
        authorsLowerCase.find((author) =>
          author.includes(searchTextLowercase)
        ) ||
        categoriesLowerCase.find((category) =>
          category.includes(searchTextLowercase)
        ) ||
        keywordsLowerCase.find((keyword) =>
          keyword.includes(searchTextLowercase)
        )
      )
        return book;

      return null;
    });

    dispatch({
      type: SEARCH_BOOK_SUCCESS,
      payload: books,
    });
  } catch (err) {
    const message = "cannot search books at the moment";
    dispatch({
      type: SEARCH_BOOK_ERROR,
      payload: message,
    });
  }
};

export const getCatalog = () => (dispatch) => {
  try {
    dispatch({
      type: BOOKS_CATALOG_LOADING,
    });

    const catalog = {};
    const alphabets = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    alphabets.forEach((alphabet) => {
      const letterBooks = [];
      BOOKS.forEach((book) => {
        if (book.title.toLowerCase().startsWith(alphabet.toLowerCase()))
          letterBooks.push(book);
      });
      if (letterBooks.length > 0) {
        catalog[alphabet] = letterBooks;
      }
    });

    dispatch({
      type: BOOKS_CATALOG_SUCCESS,
      payload: catalog,
    });
  } catch (err) {
    const message = "cannot get books catalog at the moment";
    dispatch({
      type: BOOKS_CATALOG_ERROR,
      payload: message,
    });
  }
};
