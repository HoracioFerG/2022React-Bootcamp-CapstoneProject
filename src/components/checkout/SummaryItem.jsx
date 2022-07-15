import React from "react";
import PropTypes from "prop-types";

export const SummaryItem = ({ quantity, productName, total }) => {
  return (
    <>
      <p className="summaryItem">
        {`${quantity} x ${productName}`} <b>${total}</b>
      </p>
      <hr className="summaryRule" />
    </>
  );
};

SummaryItem.propTypes = {
  quantity: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
