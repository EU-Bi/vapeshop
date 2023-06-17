import { useState } from "react";
import "./DropDown.scss";

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
  return (
    <label className="rightWrap" >
      <select className="wrapDropDown" onChange={handleChange} value={value}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default DropdownCatalog;
