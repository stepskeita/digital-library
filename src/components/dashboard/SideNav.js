import React from "react";
import { FaUpload, FaUsers } from "react-icons/fa";
import { useHistory, useLocation } from "react-router-dom";

const SideNav = ({ url }) => {
  const history = useHistory();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className={`h-screen bg-sky-500 lg:w-60 flex flex-col text-white`}>
      <button
        className={`w-full text-left font-bold flex items-center p-2 py-3 hover:bg-sky-600 ${
          pathname === url && "bg-sky-700"
        }`}
        onClick={() => history.push(url)}
      >
        <FaUpload className="mr-2 text-lg" />
        <span>Upload Book</span>
      </button>
      <button
        className={`w-full text-left font-bold flex items-center p-2 py-3 hover:bg-sky-600 ${
          pathname === `${url}/register-user` && "bg-sky-700"
        }`}
        onClick={() => history.push(`${url}/register-user`)}
      >
        <FaUsers className="mr-2 text-lg" />
        <span>Register User</span>
      </button>
    </div>
  );
};

export default SideNav;
