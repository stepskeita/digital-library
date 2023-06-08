import React from "react";
import { FaBookmark, FaHistory, FaSearch } from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
import { FaList } from "react-icons/fa";
import ButtonTooltip from "./ButtonTooltip";
const Nav = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-3 p-2 border-b border-sky-100">
      <button onClick={() => history.push("/")}>
        <img src="/img/web-logo.png" alt="D-Lib" />
      </button>
      <div className="flex items-center">
        <div className="flex items-center">
          <button
            data-tooltip-id="catalog-nav-btn-tooltip"
            data-tooltip-content="Catalog"
            type="button"
            onClick={() => history.push("/catalog")}
            className="p-2 mx-2"
          >
            <FaList />
          </button>
          <ButtonTooltip target="catalog-nav-btn-tooltip" />

          <button
            onClick={() => history.push("/recently-added")}
            className="p-2 mx-2"
            data-tooltip-id="history-nav-btn-tooltip"
            data-tooltip-content="History"
            type="button"
          >
            <FaHistory />
          </button>

          <ButtonTooltip target="history-nav-btn-tooltip" />
          <button
            onClick={() => history.push("/bookmarks")}
            className="p-2 mx-2"
            data-tooltip-id="bookmark-nav-btn-tooltip"
            data-tooltip-content="Bookmark"
            type="button"
          >
            <FaBookmark />
          </button>

          <ButtonTooltip target="bookmark-nav-btn-tooltip" />
        </div>
        {pathname !== "/" && (
          <>
            <button
              data-tooltip-id="search-nav-btn-tooltip"
              data-tooltip-content="Search"
              className="p-2 mx-2"
              onClick={() => history.push("/")}
            >
              <FaSearch />
            </button>
            <ButtonTooltip target="search-nav-btn-tooltip" />
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
