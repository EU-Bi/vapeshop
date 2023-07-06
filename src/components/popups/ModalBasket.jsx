import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ItemPopupBasket from "../basket/ItemPopupBasket";
import "./ModalBasket.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";

const ModalBasket = (props) => {
  const [isTrue, setIsTrue] = useState(false);
  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  useEffect(() => {
    if (props.basket.length > 0) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  }, [props.basket]);
  if (isMobile) {
    return (
      <Modal {...props} centered size="lg">
        {isTrue ? (
          <div className="wrapComponentBasket">
            <div className="headerBasket">
              <h3>Кошик</h3>
              <div className="closeModal" onClick={props.onHide}></div>
            </div>
            <div className="wrapItems">
              {props.basket.map(({ device, countDevice }, index) => {
                return (
                  <ItemPopupBasket
                    item={device}
                    key={index}
                    count={countDevice}
                  />
                );
              })}
            </div>
            <div className="wrapCheckOutModal">
              {/* <Link to={"/catalog"}>Продовжити покупки</Link> */}
              <div className="wrapButtonModalCheckOut">
                <div className="textCheckOut">
                  <h3>Разом:</h3>
                  <h3>{props.total} грн</h3>
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
                Обирайте потрібний товар та повертайтесь для оформлення
                замовлення
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
  }
  if (isTablet) {
    return (
      <Modal {...props} centered size="lg">
        {isTrue ? (
          <div className="wrapComponentBasket">
            <div className="headerBasket">
              <h3>Кошик</h3>
              <div className="closeModal" onClick={props.onHide}></div>
            </div>
            <div className="wrapItems">
              {props.basket.map(({ device, countDevice }, index) => {
                return (
                  <ItemPopupBasket
                    item={device}
                    key={index}
                    count={countDevice}
                  />
                );
              })}
            </div>
            <div className="wrapCheckOutModal">
              <Link to={"/catalog"}>Продовжити покупки</Link>
              <div className="wrapButtonModalCheckOut">
                <div className="textCheckOut">
                  <h3>Разом:</h3>
                  <h3>{props.total} грн</h3>
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
                Обирайте потрібний товар та повертайтесь для оформлення
                замовлення
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
  }
  if (isDesKtop) {
    return (
      <Modal {...props} centered size="lg">
        {isTrue ? (
          <div className="wrapComponentBasket">
            <div className="headerBasket">
              <h3>Кошик</h3>
              <div className="closeModal" onClick={props.onHide}></div>
            </div>
            <div className="wrapItems">
              {props.basket.map(({ device, countDevice }, index) => {
                return (
                  <ItemPopupBasket
                    item={device}
                    key={index}
                    count={countDevice}
                  />
                );
              })}
            </div>
            <div className="wrapCheckOutModal">
              <Link to={"/catalog"}>Продовжити покупки</Link>
              <div className="wrapButtonModalCheckOut">
                <div className="textCheckOut">
                  <h3>Разом:</h3>
                  <h3>{props.total} грн</h3>
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
                Обирайте потрібний товар та повертайтесь для оформлення
                замовлення
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
  }
};

export default connect((state) => ({
  basket: state.basket.basket,
  total: state.basket.total,
}))(ModalBasket);
