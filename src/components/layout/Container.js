import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-11/12 md:w-10/12 xl:w-9/12 mx-auto py-7">{children}</div>
  );
};

export default Container;
