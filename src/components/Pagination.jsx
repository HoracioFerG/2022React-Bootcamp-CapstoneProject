import React from "react";
import PropTypes from "prop-types";

export const Pagination = ({
  handlePageChange,
  total_pages,
  next_page,
  page,
}) => {
  const getPagination = (maxPage) => {
    const options = [];
    for (let i = 0; i < maxPage; i++) {
      options.push(
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
      );
    }
    return options;
  };
  return (
    <div className="paginationContainer">
      <select
        name="paginationSelec"
        id="paginationSelect"
        value={page}
        onChange={(e) => handlePageChange(parseInt(e.target.value))}
      >
        {getPagination(total_pages)}
      </select>
      {next_page && (
        <p
          className="nextButton"
          onClick={() => handlePageChange((page) => page + 1)}
        >
          Next page
        </p>
      )}
    </div>
  );
};

Pagination.propTypes = {
  handlePageChange: PropTypes.func,
  total_pages: PropTypes.number,
  next_page: PropTypes.string,
  page: PropTypes.number,
};
