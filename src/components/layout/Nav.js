import React from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  return (
    <nav className="flex items-center justify-between px-3 p-2">
      <button onClick={() => history.push("/")}>
        <img src="/img/web-logo.png" alt="D-Lib" />
      </button>
      <div className="flex items-center">
        <div className="flex items-center">
          <button onClick={() => history.push("/catalog")} className="p-2 mx-2">
            Catalog
          </button>
          <button
            onClick={() => history.push("/recently-added")}
            className="p-2 mx-2"
          >
            Recently Added
          </button>
        </div>
        <button className="p-2 mx-2">
          <FaSearch />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
