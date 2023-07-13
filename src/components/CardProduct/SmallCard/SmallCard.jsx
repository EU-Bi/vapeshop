import React from "react";
import "./SmallCard.scss";
import { Link } from "react-router-dom";
import { actionAddItemInBasket } from "../../../redux/actions/ActionsBasket";
import store from "../../../redux/store/store";
import { actionAddItemInBasketTrue } from "../../../redux/actions/ActionCard";

const SmallCard = (props) => {
  const handleClick = (item) => {
    store.dispatch(actionAddItemInBasket({ item, count: 1 }));
    store.dispatch(actionAddItemInBasketTrue());
  };
  function setTimeOutFalse() {
    setTimeout(() => {
      store.dispatch(actionAddItemInBasketTrue());
    }, 600);
  }
  return (
    <div className="wrappSmallCard" style={{ ...props.style }}>
      <img
        src={process.env.REACT_APP_API_URL + props.device.taste.photo}
        alt=""
      />
      <Link
        to={`/device/${
          props.device.brand + props.device.model.title
        }/description`}
        state={props.device}
      >
        {props.device.type} {props.device.brand} {props.device.model.title}{" "}
        {props.device.taste.title}
      </Link>
      <div className="wrappBtnCard">
        {props.device.model.newPrice !== 0 ? (
          <div className="newPrice">
            <h5>{props.device.model.newPrice} грн.</h5>
            <h4>{props.device.model.price} грн.</h4>
          </div>
        ) : (
          <h5>{props.device.model.price} грн.</h5>
        )}

        <button
          onClick={() => {
            handleClick(props.device);
            setTimeOutFalse();
          }}
          disabled={props.device.count === 0 ? true : false}
          className={props.device.count === 0 ? "disabled" : ""}
        >
          <div />
        </button>
      </div>
    </div>
  );
};

export default SmallCard;
