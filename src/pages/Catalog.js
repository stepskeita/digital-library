import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import CustomTitle from "../components/layout/CustomTitle";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCatalog } from "../action/bookAction";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Catalog = () => {
  const history = useHistory();
  const { catalog } = useSelector((state) => state.booksCatalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);
  return (
    <Container>
      <CustomTitle title="Catalog" />
      <h2 className="text-lg font-bold mb-7 flex items-center">
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
          <div className="grid grid-cols-2 xl:grid-cols-3">
            {Object.keys(catalog).map((catalogItem) => (
              <div key={catalog} className="mb-4">
                <p className="font-bold text-xl">{catalogItem}</p>
                <div className="flex flex-col">
                  {catalog[catalogItem].map((book) => (
                    <Link
                      to={`/book/${book.title
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      className="text-sm my-1 capitalize hover:underline"
                    >
                      {book.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No books in the library</p>
      )}
    </Container>
  );
};

export default Catalog;
