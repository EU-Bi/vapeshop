import React, { useState } from "react";
import "./Pagination.scss";
import { connect } from "react-redux";

const Pagination = ({ totalCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(totalCount / 12);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  const handleClickPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <nav>
      <ul className="wrapperPagination">
        <li>
          <div className="prevPagination"></div>
        </li>
        {pages.map((page, index) => (
          <li key={index} className={currentPage === page ? "active" : ""}>
            <div onClick={() => handleClickPage(page)} className="page-item">
              {page}
            </div>
          </li>
        ))}
        <li>
          <div className="nextPagination"></div>
        </li>
      </ul>
    </nav>
  );
};

export default connect((state) => ({ totalCount: state.items.devices.count }))(
  Pagination
);
