import React, { useEffect, useRef, useState } from "react";
import Container from "../components/layout/Container";
import { useHistory, useParams } from "react-router-dom";
import { BOOKS } from "../constants/books";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

const ReadBook = ({}) => {
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
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div style={{ height: "750px" }}>
          <Viewer fileUrl={book.book} />
        </div>
      </Worker>
    </>
  );
};

export default ReadBook;
