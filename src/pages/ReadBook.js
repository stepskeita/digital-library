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
        className="underline text-sky-500 mr-2"
      >
        GO BACK
      </button>
      <Worker workerUrl="/js/pdf.worker.min.js">
        <div style={{ height: "750px" }}>
          <Viewer fileUrl={book.book} />
        </div>
      </Worker>
    </Container>
  );
};

export default ReadBook;
