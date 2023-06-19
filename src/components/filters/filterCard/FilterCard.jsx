import React, { useState } from "react";
import "./FilterCard.scss";
import CheckBox from "./CheckBox";
import {
  actionAddFilter,
  actionDeleteFilter,
} from "../../../redux/actions/ActionFilters";
import store from "../../../redux/store/store";

const FilterCard = ({ name, filter, currentFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);


  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      store.dispatch(actionAddFilter("counts", { title: true }));
    } else {
      store.dispatch(actionDeleteFilter("counts", { title: true }));
    }
  };
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    if (!checkedTwo) {
      store.dispatch(actionAddFilter("counts", { title: false }));
    } else {
      store.dispatch(actionDeleteFilter("counts", { title: false }));
    }
  };
  let filterName;
  function filteringName(name) {
    if (name === "brands") {
      return (filterName = "Виробники");
    }
    if (name === "types") {
      return (filterName = "Тип пристрою");
    }
    if (name === "models") {
      return (filterName = "Моделі");
    }
    if (name === "tastes") {
      return (filterName = "Смаки");
    }
    if (name === "devices") {
      return (filterName = "Наявність");
    } else return;
  }
  filteringName(name);
  const handleClickOpen = (e) => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      e.target.className = "rotate";
    } else {
      e.target.className = "rotateprev";
    }
  };
  return (
    <div className="filterOne">
      <div className="wrapFilterOne">
        <p>{filterName}</p>
        <div
          onClick={(e) => {
            handleClickOpen(e);
          }}
        />
      </div>

      {isOpen && (
        <div className="filterOpen">
          {Array.isArray(filter) ? (
            filter.map((filt) => (
              <CheckBox name={name} key={filt.id} checkbox={filt} isChecked={currentFilters} />
            ))
          ) : (
            <>
              <div key={"наявність"}>
                <input
                  type="checkbox"
                  className="filterCheckbox"
                  id={"true"}
                  checked={checked}
                  onChange={() => handleChange()}
                  name={"true"}
                />
                <label htmlFor={"true"}>Є в навявності</label>
              </div>
              <div key={"наявністьFalse"}>
                <input
                  type="checkbox"
                  className="filterCheckbox"
                  id={"false"}
                  name={"false"}
                  checked={checkedTwo}
                  onChange={() => handleChangeTwo()}
                />
                <label htmlFor={"false"}>Немає в навявності</label>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterCard;
