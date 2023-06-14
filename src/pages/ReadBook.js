import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import Container from "../components/layout/Container";
import { backendUrl } from "../constants/url";
import { useDispatch, useSelector } from "react-redux";
import { getBook } from "../action/bookAction";

const ReadBook = () => {
  const { slug } = useParams();
  const history = useHistory();

  const { book, error } = useSelector((state) => state.getBook);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook(slug));
  }, [slug, dispatch]);

  return (
    <Container>
      <div className="flex items-center text-sm mb-5">
        <button
          onClick={() => history.goBack()}
          className="underline text-sky-500 mr-2 whitespace-nowrap"
        >
          GO BACK
        </button>
        {book && (
          <>
            <span className="ml-1 mr-2">|</span>
            <p className="truncate">{book.title}</p>
          </>
        )}
      </div>
      {/* <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> */}
      {error && <p>{error}</p>}
      {book && (
        <Worker workerUrl="/js/pdf.worker.min.js">
          <div style={{ height: "750px" }}>
            <Viewer
              enableSmoothScroll
              fileUrl={`${backendUrl}/${book.bookFile}`}
            />
          </div>
        </Worker>
      )}
      {/* </div> */}
    </Container>
  );
};

export default ReadBook;
