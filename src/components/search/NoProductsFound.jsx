import React from "react";
import noFoundImg from "../../assets/no-found.png";

export const NoProductsFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignContent: "center",
      }}
    >
      <h1>{`Sorry!`} </h1>
      <h3>We couldn't found what you're looking for</h3>
      <img src={noFoundImg} alt="no-product-found" />
    </div>
  );
};
