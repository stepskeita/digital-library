import React from "react";
import {
  FaBookmark,
  FaHistory,
  FaSearch,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";
import { FaList } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import ButtonTooltip from "./ButtonTooltip";
import { useDispatch, useSelector } from "react-redux";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { logoutUser } from "../../action/userAction";
const Nav = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  return (
    <nav className="sticky top-0 z-50 bg-white  border-b border-sky-100 nav">
      <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto  flex items-center justify-between  p-2">
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
              className="p-1 mx-1"
            >
              <FaList />
            </button>
            <ButtonTooltip target="catalog-nav-btn-tooltip" />

            <button
              onClick={() => history.push("/recently-added")}
              className="p-1 mx-1"
              data-tooltip-id="history-nav-btn-tooltip"
              data-tooltip-content="Recently Added"
              type="button"
            >
              <FaHistory />
            </button>

            <ButtonTooltip target="history-nav-btn-tooltip" />
            <button
              onClick={() => history.push("/bookmarks")}
              className="p-1 mx-1"
              data-tooltip-id="bookmark-nav-btn-tooltip"
              data-tooltip-content="Bookmark"
              type="button"
            >
              <FaBookmark />
            </button>

            <ButtonTooltip target="bookmark-nav-btn-tooltip" />
            {pathname !== "/" && (
              <>
                <button
                  data-tooltip-id="search-nav-btn-tooltip"
                  data-tooltip-content="Search"
                  className="p-1 mx-1"
                  onClick={() => history.push("/")}
                >
                  <FaSearch />
                </button>
                <ButtonTooltip target="search-nav-btn-tooltip" />
              </>
            )}

            {userInfo ? (
              <Menu
                className="bg-white p-0"
                menuButton={
                  <MenuButton className="p-1 mx-1">
                    <FaUserAlt />
                  </MenuButton>
                }
              >
                <MenuItem
                  onClick={() => history.push("/dashboard")}
                  className="flex items-center"
                >
                  <MdOutlineDashboard className="mr-2" />
                  Dashboard
                </MenuItem>
                <MenuItem
                  onClick={() => dispatch(logoutUser())}
                  className="flex items-center"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </MenuItem>
              </Menu>
            ) : (
              <button
                onClick={() => history.push("/login")}
                className="p-1 mx-1"
                data-tooltip-id="user-nav-btn-tooltip"
                data-tooltip-content="Login"
                type="button"
              >
                <FaUserAlt />
              </button>
            )}

            <ButtonTooltip target="user-nav-btn-tooltip" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
