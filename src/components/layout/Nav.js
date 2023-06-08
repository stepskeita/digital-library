import React from "react";
import { FaBookmark, FaHistory, FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { FaList } from "react-icons/fa";
import ButtonTooltip from "./ButtonTooltip";
const Nav = () => {
  const history = useHistory();
  return (
    <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-3 p-2 border-b border-sky-100">
      <button onClick={() => history.push("/")}>
        <img src="/img/web-logo.png" alt="D-Lib" />
      </button>
      <div className="flex items-center">
        <div className="flex items-center">
          <button
            data-tooltip-target="catalog-nav-btn-tooltip"
            data-tooltip-placement="bottom"
            type="button"
            onClick={() => history.push("/catalog")}
            className="p-2 mx-2"
          >
            <FaList />
          </button>
          <ButtonTooltip target="catalog-nav-btn-tooltip" title="Catalog" />

          <button
            onClick={() => history.push("/recently-added")}
            className="p-2 mx-2"
            data-tooltip-target="history-nav-btn-tooltip"
            data-tooltip-placement="bottom"
            type="button"
          >
            <FaHistory />
          </button>

          <ButtonTooltip target="history-nav-btn-tooltip" title="History" />
          <button
            onClick={() => history.push("/bookmarks")}
            className="p-2 mx-2"
            data-tooltip-target="bookmark-nav-btn-tooltip"
            data-tooltip-placement="bottom"
            type="button"
          >
            <FaBookmark />
          </button>

          <ButtonTooltip target="bookmark-nav-btn-tooltip" title="History" />
        </div>
        <button className="p-2 mx-2">
          <FaSearch />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
