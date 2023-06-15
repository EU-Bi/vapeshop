import React, { useState } from "react";
import "./CardBasket.scss";

const CardBasket = ({ item }) => {
  const [count, setCount] = useState(1);
  return (
    <div className="wrapCardBasket">
      <img src={process.env.REACT_APP_API_URL + item.img} alt="" />
      <div className="textCardBasket">
        <p>
          {item.type.title +
            " " +
            item.brand.title +
            " " +
            item.model.title +
            " "}{" "}
          Strawberry Mango Peach
        </p>
        <div className="countPriceText">
          <p className="price">{item.model.price} грн.</p>
          <p className="count">{count}</p>
          <p className="total">{count * item.model.price} грн.</p>
        </div>
      </div>
    </div>
  );
};

export default CardBasket;
