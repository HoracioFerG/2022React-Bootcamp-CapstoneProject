import React from "react";
import noFoundImg from "../../assets/no-found.png";

export const NoProductsFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <h1>{`Sorry!`} </h1>
      <h3>We couldn't find what you were looking for</h3>
      <img
        src={noFoundImg}
        style={{ width: "initial" }}
        alt="no-product-found"
      />
    </div>
  );
};
