import React from "react";
import Container from "../components/layout/Container";
import CustomTitle from "../components/layout/CustomTitle";
import { useHistory } from "react-router-dom";

const Catalog = () => {
  const history = useHistory();
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
    </Container>
  );
};

export default Catalog;
