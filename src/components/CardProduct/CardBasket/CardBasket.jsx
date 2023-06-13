import React from "react";
import './CardBasket.scss'

const CardBasket = () => {
  return (
    <div className="wrapCardBasket">
      <img src="" alt="" />
      <div className="textCardBasket">
        <p>Одноразова Pod система Elf Bar BC4000 LE Strawberry Mango Peach</p>
        <div className="countPriceText">
          <p className="price">400</p>
          <p className="count">2</p>
          <p className="total">800</p>
        </div>
      </div>
    </div>
  );
};

export default CardBasket;
