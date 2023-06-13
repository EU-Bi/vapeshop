import React, { useState } from "react";
import store from "../../../redux/store/store";
import {
  actionAddFilter,
  actionDeleteFilter,
} from "../../../redux/actions/ActionFilters";

const CheckBox = ({ checkbox, name }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checkbox) => {
    setChecked(!checked);
    if (!checked) {
      console.log(checkbox);
      store.dispatch(actionAddFilter(name, checkbox));
    } else {
      console.log("delete", checkbox);
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
