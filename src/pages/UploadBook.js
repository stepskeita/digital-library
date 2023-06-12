import React, { useState } from "react";
import Container from "../components/layout/Container";
import FileInput from "../components/dashboard/FileInput";
import TextInput from "../components/dashboard/TextInput";
import ArrayInput from "../components/dashboard/ArrayInput";

const UploadBook = () => {
  const [categories, setCategories] = useState([""]);
  const [authors, setAuthors] = useState([""]);
  const [keywords, setKeywords] = useState([""]);

  return (
    <div className="">
      <Container>
        <div className="max-w-xl mx-auto p-6 bg-white/95 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-7">Upload new book</h2>

          <form>
            {/* pdf file */}
            <div className="mb-5">
              <label className="mb-2 after:content-['*'] after:text-red-600 after:ml-1">
                Pdf File
              </label>
              <FileInput
                label="Drag and drop or click to upload pdf file"
                id="pdfFile"
              />
            </div>

            {/* pdf cover */}
            <div className="mb-5">
              <label className="mb-2 after:content-['*'] after:text-red-600 after:ml-1">
                Pdf Cover
              </label>
              <FileInput
                label="Drag and drop or click to upload pdf file"
                id="pdfCover"
              />
            </div>

            {/* book title */}
            <TextInput required label="Book Title" />

            {/* Book Description */}
            <div className="mb-5">
              <label className="mb-2 after:content-['*'] after:text-red-600 after:ml-1">
                Book Description
              </label>
              <textarea
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
