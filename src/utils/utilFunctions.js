export const addToBookMarks = (book) => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    ? JSON.parse(localStorage.getItem("bookmarks"))
    : {};
  if (!book) return false;

  const key = book.title.toLowerCase().split(" ").join("-");
  bookmarks[key] = book;

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  return true;
};

export const deleteFromBookMarks = (book) => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    ? JSON.parse(localStorage.getItem("bookmarks"))
    : {};
  if (!book) return null;

  const key = book.title.toLowerCase().split(" ").join("-");
  delete bookmarks[key];

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  return bookmarks;
};