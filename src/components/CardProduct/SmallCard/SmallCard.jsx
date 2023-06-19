import React from "react";
import "./SmallCard.scss";
import { Link } from "react-router-dom";
import { actionAddItemInBasket } from "../../../redux/actions/ActionsBasket";
import store from "../../../redux/store/store";

const SmallCard = (props) => {
  const handleClick = (item) => {
    store.dispatch(actionAddItemInBasket({ item, count: 1 }));
  };
  return (
    <div className="wrappSmallCard" style={{ ...props.style }}>
      <img src={process.env.REACT_APP_API_URL + props.device.img} alt="" />
      <Link
        to={`/device/${
          props.device.brand.title + props.device.model.title
        }/description`}
        state={props.device}
      >
        {props.device.type.title} {props.device.brand.title}{" "}
        {props.device.model.title} Blue Razz Ice
      </Link>
      <div className="wrappBtnCard">
        <h5>{props.device.model.price} грн.</h5>
        <button onClick={() => handleClick(props.device)}>
          <div />
        </button>
      </div>
    </div>
  );
};

export default SmallCard;
