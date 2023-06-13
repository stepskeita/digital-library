import React, { useState } from "react";
import Container from "../components/layout/Container";
import FileInput from "../components/dashboard/FileInput";
import TextInput from "../components/dashboard/TextInput";
import ArrayInput from "../components/dashboard/ArrayInput";
import FilePreview from "../components/dashboard/FilePreview";
import { useDispatch } from "react-redux";
import { uploadBook } from "../action/bookAction";

const UploadBook = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [bookFile, setBookFile] = useState(null);
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([""]);
  const [authors, setAuthors] = useState([""]);
  const [keywords, setKeywords] = useState([""]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookDetails = {
      coverImage,
      bookFile,
      title,
      description,
      isbn,
      authors,
      categories,
      keywords,
    };

    dispatch(uploadBook(bookDetails));
  };
  return (
    <div className="">
      <Container>
        <div className="max-w-xl mx-auto p-6 bg-white/95 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-7">Upload new book</h2>

          <form onSubmit={handleSubmit}>
            {/* pdf file */}
            <div className="mb-5">
              <label className="mb-2 after:content-['*'] after:text-red-600 after:ml-1">
                Pdf File
              </label>
              {!bookFile ? (
                <FileInput
                  onChange={(e) => setBookFile(e.target.files[0])}
                  label="Click here to upload pdf file"
                  id="pdfFile"
                />
              ) : (
                <FilePreview file={bookFile} reset={() => setBookFile(null)} />
              )}
            </div>

            {/* pdf cover */}
            <div className="mb-5">
              <label className="mb-2 after:content-['*'] after:text-red-600 after:ml-1">
                Book Cover
              </label>
              {!coverImage ? (
                <FileInput
                  label="Click here to upload book cover"
                  id="bookCover"
                  onChange={(e) => setCoverImage(e.target.files[0])}
                />
              ) : (
                <FilePreview
                  file={coverImage}
                  reset={() => setCoverImage(null)}
                />
              )}
            </div>

            {/* book title */}
            <TextInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              label="Book Title"
            />

            {/* book isbn */}
            <TextInput
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
              label="Book ISBN"
            />

            {/* Book Description */}
            <div className="mb-5">
              <label className="mb-2 after:content-['*'] after:text-red-600 after:ml-1">
                Book Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 px-3 h-52 min-h-52 max-h-52 border focus:border-sky-500 border-sky-500/20  outline-none"
                required
              ></textarea>
            </div>

            {/* Book Categories */}
            <div className="mb-5">
              <label className="mb-2 after:content-['*'] after:text-red-600 after:ml-1">
                Book Author(s)
              </label>
              <ArrayInput
                inputValue={authors}
                setInputValue={setAuthors}
                id="authors"
              />
            </div>

            {/* Book Categories */}
            <div className="mb-5">
              <label className="mb-2 after:content-['*'] after:text-red-600 after:ml-1">
                Book Categories
              </label>
              <ArrayInput
                inputValue={categories}
                setInputValue={setCategories}
                id="categories"
              />
            </div>

            {/* Book Categories */}
            <div className="mb-7">
              <label className="mb-2 after:content-['*'] after:text-red-600 after:ml-1">
                Book Keywords
              </label>
              <ArrayInput
                inputValue={keywords}
                setInputValue={setKeywords}
                id="keywords"
              />
            </div>

            <button
              type="submit"
              className="bg-sky-600 w-full text-white py-2 hover:bg-sky-500"
            >
              Upload Book
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UploadBook;
