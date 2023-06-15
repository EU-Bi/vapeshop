import React, { useState } from "react";
import store from "../../redux/store/store";
import { actionDeleteItemInBasket } from "../../redux/actions/ActionsBasket";

const ItemPopupBasket = ({ item }) => {
  const handleClick = (item) => {
    store.dispatch(actionDeleteItemInBasket({ item }));
  };
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    if (count < item.count) {
      setCount(count + 1);
    }
  };
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="ItemPopupBasket">
      <img src={process.env.REACT_APP_API_URL + item.img} alt="" />
      <div className="wrapTextItemPopup">
        <div className="headItemPopup">
          <span>
            {item.type.title +
              " " +
              item.brand.title +
              " " +
              item.model.title +
              " "}{" "}
            MangoPeach
          </span>
          <p onClick={() => handleClick(item)}>Видалити</p>
        </div>
        <div className="footerItemPopup">
          <h5>{item.model.price} грн.</h5>
          <div className="counter">
            <div
              className="minus"
              onClick={() => handleDecrease()}
            >
              <div className="minusCont"></div>
            </div>
            <div className="count">{count}</div>
            <div
              className="plus"
              onClick={() => handleIncrease()}
            >
              <div className="plusCont"></div>
            </div>
          </div>
          <h5>{count * item.model.price} грн</h5>
        </div>
      </div>
    </div>
  );
};

export default ItemPopupBasket;
