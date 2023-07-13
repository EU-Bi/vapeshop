import React, { useEffect, useState } from "react";
import "./Pagination.scss";
import { connect } from "react-redux";
import store from "../../redux/store/store";
import { actionSetIndexes } from "../../redux/actions/ActionsItems";

const Pagination = ({ data, page }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const indexOfLastItem = currentPage * 12;
    const indexOfFirstItem = indexOfLastItem - 12;
    store.dispatch(actionSetIndexes(indexOfFirstItem, indexOfLastItem));
  }, [currentPage]);
  console.log(data);
  console.log(page.indexOfLastItem >= data.length);
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
        {pages.length > 0 ? (
          pages.map((page, index) => (
            <li key={index} className={currentPage === page ? "active" : ""}>
              <div onClick={() => handleClickPage(page)} className="page-item">
                {page}
              </div>
            </li>
          ))
        ) : (
          <li>
            <div className="page-item active">1</div>
          </li>
        )}
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
