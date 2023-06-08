import { BOOKS } from "../constants/books";
import {
  SEARCH_BOOK_ERROR,
  SEARCH_BOOK_SUCCESS,
} from "../reducers/types/generalTypes";

export const searchBook = () => (dispatch, getState) => {
  try {
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
