import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BOOKS } from "../constants/books";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import Container from "../components/layout/Container";

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
    <Container>
      <button
        onClick={() => history.goBack()}
        className="underline text-sky-500 mb-3"
      >
        GO BACK
      </button>
      {/* <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> */}
      <Worker workerUrl="/js/pdf.worker.min.js">
        <div style={{ height: "750px" }}>
          <Viewer fileUrl={book.book} />
        </div>
      </Worker>
      {/* </div> */}
    </Container>
  );
};

export default ReadBook;
