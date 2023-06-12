import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UploadBook from "./UploadBook";

const Dashboad = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const history = useHistory();
  useEffect(() => {
    if (!userInfo) history.push("/login");
  }, [userInfo, history]);
  return (
    <div>
      <Route component={UploadBook} path="/" />
    </div>
  );
};

export default Dashboad;
