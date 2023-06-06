import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BOOKS } from "../constants/books";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

const ReadBook = () => {
  const { slug } = useParams();
  const history = useHistory();

  const [book, setBook] = useState(
    BOOKS.find((book) => book.title.toLowerCase().split(" ").join("-") === slug)
  );

  useEffect(() => {
    setBook(
      BOOKS.find(
        (book) => book.title.toLowerCase().split(" ").join("-") === slug
      )
    );
  }, [slug]);

  return (
    <>
      <button
        onClick={() => history.goBack()}
        className="block w-fit mb-2 ml-5 p-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white"
      >
        GO BACK
      </button>
      <Worker workerUrl="/js/pdf.worker.min.js">
        <div style={{ height: "750px" }}>
          <Viewer fileUrl={book.book} />
        </div>
      </Worker>
    </>
  );
};

export default ReadBook;
