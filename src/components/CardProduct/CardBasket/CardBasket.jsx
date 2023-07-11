import React, { useState } from "react";
import "./CardBasket.scss";

const CardBasket = ({ item, count }) => {
  return (
    <div className="wrapCardBasket">
      <img src={process.env.REACT_APP_API_URL + item.taste.photo} alt="" />
      <div className="textCardBasket">
        <p>
          {item.type + " " + item.brand + " " + item.model.title + " "}{" "}
          {item.taste.title}
        </p>
        <div className="countPriceText">
          {item.model.newPrice !== 0 ? (
            <p className="price">{item.model.newPrice} грн.</p>
          ) : (
            <p className="price">{item.model.price} грн.</p>
          )}
          <p className="count">{count} шт.</p>
          {item.model.newPrice !== 0 ? (
            <p className="price">{item.model.newPrice * count} грн.</p>
          ) : (
            <p className="price">{item.model.price * count} грн.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBasket;
