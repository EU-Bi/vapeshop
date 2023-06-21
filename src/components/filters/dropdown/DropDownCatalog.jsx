import { useEffect, useState } from "react";
import "./DropDown.scss";
import store from "../../../redux/store/store";
import { actionSort } from "../../../redux/actions/ActionFilters";
import {
  SORT_FROM_HIGHT_PRICE,
  SORT_FROM_LOW_PRICE,
  SORT_NEW_DEVICES,
  SORT_RATING,
} from "../../../redux/typesActions/types";

const DropdownCatalog = () => {
  const options = [
    { label: "За рейтингом", value: "За рейтингом" },
    { label: "Новинки", value: "Новинки" },
    { label: "Від дешевих до дорогих", value: "Від дешевих до дорогих" },
    { label: "Від дорогих до  дешевих", value: "Від дорогих до  дешевих" },
  ];
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (value === "За рейтингом") {
      store.dispatch(actionSort(SORT_RATING));
    }
    if (value === "Новинки") {
      store.dispatch(actionSort(SORT_NEW_DEVICES));
    }
    if (value === "Від дешевих до дорогих") {
      store.dispatch(actionSort(SORT_FROM_LOW_PRICE));
    }
    if (value === "Від дорогих до  дешевих") {
      store.dispatch(actionSort(SORT_FROM_HIGHT_PRICE));
    }
  }, [value]);
  return (
    <label className="rightWrap">
      <select className="wrapDropDown" onChange={handleChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default DropdownCatalog;
