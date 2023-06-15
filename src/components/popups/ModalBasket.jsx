import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ItemPopupBasket from "../basket/ItemPopupBasket";
import "./ModalBasket.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ModalBasket = (props) => {
  const [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    if (props.basket.length > 0) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  }, [props.basket]);

  return (
    <Modal {...props} centered size="lg">
      {isTrue ? (
        <div className="wrapComponentBasket">
          <div className="headerBasket">
            <h3>Кошик</h3>
            <div className="closeModal" onClick={props.onHide}></div>
          </div>
          <div className="wrapItems">
            {props.basket.map(({item}, index) => {
              return <ItemPopupBasket item={item} key={index} />;
            })}
          </div>
          <div className="wrapCheckOutModal">
            <Link to={"/catalog"}>Продовжити покупки</Link>
            <div className="wrapButtonModalCheckOut">
              <div className="textCheckOut">
                <h3>Разом:</h3>
                <h3>1470 грн</h3>
              </div>
              <Link to={"/basket"}>Оформити замовлення</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="wrapComponentBasket">
          <div className="headerBasket">
            <h3>Кошик</h3>
            <div className="closeModal" onClick={props.onHide}></div>
          </div>
          <div className="emptyBasketWrap">
            <div className="paket"></div>
            <h4>Здається, ваш кошик порожній</h4>
            <p>
              Обирайте потрібний товар та повертайтесь для оформлення замовлення
            </p>
            <Link to={"/catalog"}>
              Перейти в каталог
              <div className="arrowRight"></div>
            </Link>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default connect((state) => ({ basket: state.basket.basket }))(
  ModalBasket
);
