import React from "react";
import store from "../../redux/store/store";
import { actionDeleteItemInBasket } from "../../redux/actions/ActionsBasket";

const ItemPopupBasket = (item) => {
  const handleClick = (item) => {
    store.dispatch(actionDeleteItemInBasket({ item }));
  };
  return (
    <div className="ItemPopupBasket">
      <img src="" alt="" />
      <div className="wrapTextItemPopup">
        <div className="headItemPopup">
          <span>Одноразова сигарета Elf Bar BC4000 LE Mango Peach </span>
          <p onClick={() => handleClick(item)}>Видалити</p>
        </div>
        <div className="footerItemPopup">
          <h5>490 грн</h5>
          <div className="counter">
            <div className="minus">
              <div className="minusCont"></div>
            </div>
            <div className="count">2</div>
            <div className="plus">
              <div className="plusCont"></div>
            </div>
          </div>
          <h5>980 грн</h5>
        </div>
      </div>
    </div>
  );
};

export default ItemPopupBasket;
