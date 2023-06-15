import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import CustomTitle from "../components/layout/CustomTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCatalog } from "../action/bookAction";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import scrollToTop from "../utils/scrollToTop";
import Masonry from "react-masonry-css";

const Catalog = () => {
  const history = useHistory();
  const { catalog } = useSelector((state) => state.booksCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalog());
    scrollToTop();
  }, [dispatch]);

  const breakpointColumnsObj = {
    default: 4, // Number of columns for viewport width >= 1100px
    900: 3, // Number of columns for viewport width >= 700px
  };
  return (
    <Container>
      <CustomTitle title="Catalog" />
      <h2 className="text-sm mb-7 flex items-center">
        <button
          onClick={() => history.goBack()}
          className="underline text-sky-500 mr-2"
        >
          GO BACK
        </button>
        | Catalog
      </h2>

      {catalog && Object.keys(catalog).length > 0 ? (
        <div className="bg-white border border-gray-800 p-2">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {Object.keys(catalog).map((catalogItem) => (
              <div key={catalogItem} className="mb-4 m-3">
                <p className="font-bold text-xl">{catalogItem}</p>
                <div className="flex flex-col">
                  {catalog[catalogItem].map((book) => (
                    <Link
                      key={book._id}
                      to={`/book/${book._id}`}
                      className="text-sm my-1 capitalize hover:underline"
                    >
                      {book.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      ) : (
        <p>No books in the library</p>
      )}
    </Container>
  );
};

export default Catalog;
