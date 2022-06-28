import React from "react";

export const Pagination = ({
  pagination,
  setPagination,
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
        value={pagination.page}
        onChange={(e, pagination) =>
          setPagination({ ...pagination, page: e.target.value })
        }
      >
        {getPagination(total_pages).map((opt) => opt)}
      </select>
      {next_page && (
        <p
          className="nextButton"
          onClick={(pagination) =>
            setPagination({
              page: page + 1,
              nextPage: next_page,
            })
          }
        >
          Next page
        </p>
      )}
    </div>
  );
};
