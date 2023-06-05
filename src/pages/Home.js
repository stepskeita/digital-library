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
            className="flex-1 border border-black"
            placeholder="Search for title, author, category, keyword ..."
          />
          <button className="bg-gray-300 text-black p-3 px-12 border border-black border-l-0 hover:bg-gray-100">
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
