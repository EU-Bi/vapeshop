import React, { useEffect, useState } from "react";
import store from "../../../redux/store/store";
import {
  actionAddFilter,
  actionDeleteFilter,
} from "../../../redux/actions/ActionFilters";

const CheckBox = ({ checkbox, name, isChecked }) => {
  const [checked, setChecked] = useState(false);
  console.log(isChecked.filter((filter) => {
    if (filter.item === checkbox) {
      return checkbox
    } else {
      return 'tutut';
    }
  }));
  const handleChange = (checkbox) => {
    setChecked(!checked);
    if (!checked) {
      store.dispatch(actionAddFilter(name, checkbox));
    } else {
      store.dispatch(actionDeleteFilter(name, checkbox));
    }
  };
  return (
    <div key={checkbox.id}>
      <input
        type="checkbox"
        className="filterCheckbox"
        id={checkbox.title}
        name={checkbox.title}
        checked={checked}
        onChange={() => handleChange(checkbox)}
      />
      <label htmlFor={checkbox.title}>{checkbox.title}</label>
    </div>
  );
};

export default CheckBox;
