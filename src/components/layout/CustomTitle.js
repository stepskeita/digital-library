import React from "react";
import { Helmet } from "react-helmet";

const CustomTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default CustomTitle;
