import React, { useEffect, useState } from "react";
import store from "../../redux/store/store";
import {
  actionDeleteItemInBasket,
  actionUpdateCountDevice,
} from "../../redux/actions/ActionsBasket";

const ItemPopupBasket = ({ item, count }) => {
  const handleClick = (item) => {
    store.dispatch(actionDeleteItemInBasket({ item }));
  };
  const [currentCount, setCount] = useState(count);
  useEffect(() => {
    store.dispatch(actionUpdateCountDevice({ item, count: currentCount }));
  }, [currentCount, item]);
  const handleIncrease = () => {
    if (currentCount < item.count) {
      setCount((prev) => prev + 1);
    }
  };
  const handleDecrease = () => {
    if (currentCount > 0) {
      setCount((prev) => prev - 1);
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
            <div className="minus" onClick={() => handleDecrease()}>
              <div className="minusCont"></div>
            </div>
            <div className="count">{currentCount}</div>
            <div className="plus" onClick={() => handleIncrease()}>
              <div className="plusCont"></div>
            </div>
          </div>
          <h5>{currentCount * item.model.price} грн</h5>
        </div>
      </div>
    </div>
  );
};

export default ItemPopupBasket;
