import React, { useEffect, useState } from "react";
import "./Pagination.scss";
import { connect } from "react-redux";
import store from "../../redux/store/store";
import { actionSetIndexes } from "../../redux/actions/ActionsItems";
import { DOTS, usePagination } from "./usePagination";

const Pagination = ({ data, page }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const paginationRange = usePagination({
    totalCount: data.length,
    pageSize: 12,
    currentPage: currentPage,
    siblingCount: 1,
  });

  useEffect(() => {
    const indexOfLastItem = currentPage * 12;
    const indexOfFirstItem = indexOfLastItem - 12;
    store.dispatch(actionSetIndexes(indexOfFirstItem, indexOfLastItem));
  }, [currentPage]);
  const pageCount = Math.ceil(data.length / 12);
  const pages = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  // Функция для переключения на следующую страницу
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Функция для переключения на предыдущую страницу
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleClickPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <nav>
      <ul className="wrapperPagination">
        <li>
          {currentPage === 1 ? (
            <button
              className="prevPagination"
              onClick={() => prevPage()}
              disabled={currentPage === 1}
            ></button>
          ) : (
            <button
              className="nextPagination rotated"
              onClick={() => prevPage()}
              disabled={currentPage === 1}
            ></button>
          )}
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return <li>&#8230;</li>;
          }

          return (
            <li
              key={index}
              className={currentPage === pageNumber ? "active" : ""}
            >
              <div onClick={() => handleClickPage(pageNumber)} className="page-item">
                {pageNumber}
              </div>
            </li>
          );
        })}
        <li>
          {page.indexOfLastItem >= data.length ? (
            <button
              className="prevPagination rotated"
              onClick={() => nextPage()}
              disabled={page.indexOfLastItem >= data.length}
            ></button>
          ) : (
            <button
              className="nextPagination"
              onClick={() => nextPage()}
              disabled={page.indexOfLastItem >= data.length}
            ></button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default connect((state) => ({ page: state.page }))(Pagination);
