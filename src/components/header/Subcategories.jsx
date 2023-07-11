import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../redux/store/store";
import {
  actionAddFilter,
  actionResetFilters,
} from "../../redux/actions/ActionFilters";

const Subcategories = ({ brands, allBrands }) => {
  function compareObjects(obj1, obj2) {
    return obj1.title === obj2.title;
  }
  const result = allBrands.filter((brand) =>
    brands.some((brand2) => compareObjects(brand, brand2))
  );
  return (
    <div className="subcategories">
      {result.map((brand, index) => {
        return (
          <Link
            to={"/catalog"}
            onClick={() => {
              store.dispatch(actionResetFilters());
              store.dispatch(actionAddFilter("brands", brand));
            }}
            key={index}
            className="subcategoriesItem"
          >
            {brand.title}
          </Link>
        );
      })}
    </div>
  );
};

export default connect((state) => ({ allBrands: state.items.brands }))(
  Subcategories
);
