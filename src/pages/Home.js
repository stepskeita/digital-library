import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Container from "../components/layout/Container";
import PopularBooks from "../components/home/PopularBooks";

const Home = () => {
  return (
    <Container>
      <div className="py-7 flex items-center justify-center flex-col w-full">
        <Link to="/" className="mb-5">
          <img src="img/web-logo.png" alt="D-Lib" />
        </Link>
        <div className="flex items-stretch w-full px-3">
          <input
            type="text"
            className="flex-1 border border-sky-500 border-r-0 focus:outline-none focus:border-none"
            placeholder="Search for title, author, category, keyword ..."
          />
          <button className="bg-sky-500 text-white p-3 px-12 border border-sky-500 hover:bg-sky-600">
            Search
          </button>
        </div>
      </div>

      {/* popular books */}
      <PopularBooks />
    </Container>
  );
};

export default Home;
