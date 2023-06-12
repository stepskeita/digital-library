import React, { useEffect } from "react";
import Container from "../components/layout/Container";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Dashboad = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const history = useHistory();
  useEffect(() => {
    if (!userInfo) history.push("/login");
  }, [userInfo]);
  return (
    <div>
      <Container>Dashboad</Container>
    </div>
  );
};

export default Dashboad;
