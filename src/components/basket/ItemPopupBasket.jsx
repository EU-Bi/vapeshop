import React, { useEffect, useState } from "react";
import store from "../../redux/store/store";
import {
  actionDeleteItemInBasket,
  actionUpdateCountDevice,
} from "../../redux/actions/ActionsBasket";
import { useMediaQuery } from "react-responsive";

const ItemPopupBasket = ({ item, count }) => {
  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  const handleClick = (item) => {
    store.dispatch(actionDeleteItemInBasket({ item }));
  };
  const [currentCount, setCount] = useState(count);
  useEffect(() => {
    store.dispatch(actionUpdateCountDevice({ item, count: currentCount }));
  }, [currentCount, item]);
  const handleIncrease = () => {
    if (currentCount < item.taste.count) {
      setCount((prev) => prev + 1);
    }
  };
  const handleDecrease = () => {
    if (currentCount > 0) {
      setCount((prev) => prev - 1);
    }
  };
  if(isMobile){
    return (
      <div className="ItemPopupBasket">
        <img src={process.env.REACT_APP_API_URL + item.taste.photo} alt="" />
        <div className="wrapTextItemPopup">
          <div className="headItemPopup">
            <span>
              {item.type + " " + item.brand + " " + item.model.title + " "}{" "}
              {item.taste.title}
            </span>
            <p onClick={() => handleClick(item)}></p>
          </div>
          <div className="footerItemPopup">
            {item.model.newPrice !== 0 ? (
              <h5>{item.model.newPrice} грн.</h5>
            ) : (
              <h5>{item.model.price} грн.</h5>
            )}
            <div className="counter">
              <div className="minus" onClick={() => handleDecrease()}>
                <div className="minusCont"></div>
              </div>
              <div className="count">{currentCount}</div>
              <div className="plus" onClick={() => handleIncrease()}>
                <div className="plusCont"></div>
              </div>
            </div>
            {item.model.newPrice !== 0 ? (
              <h5>{currentCount * item.model.newPrice} грн.</h5>
            ) : (
              <h5>{currentCount * item.model.price} грн.</h5>
            )}
          </div>
        </div>
      </div>
    );
  }
  if(isTablet){
    return (
      <div className="ItemPopupBasket">
        <img src={process.env.REACT_APP_API_URL + item.taste.photo} alt="" />
        <div className="wrapTextItemPopup">
          <div className="headItemPopup">
            <span>
              {item.type + " " + item.brand + " " + item.model.title + " "}{" "}
              {item.taste.title}
            </span>
            <p onClick={() => handleClick(item)}>Видалити</p>
          </div>
          <div className="footerItemPopup">
            {item.model.newPrice !== 0 ? (
              <h5>{item.model.newPrice} грн.</h5>
            ) : (
              <h5>{item.model.price} грн.</h5>
            )}
            <div className="counter">
              <div className="minus" onClick={() => handleDecrease()}>
                <div className="minusCont"></div>
              </div>
              <div className="count">{currentCount}</div>
              <div className="plus" onClick={() => handleIncrease()}>
                <div className="plusCont"></div>
              </div>
            </div>
            {item.model.newPrice !== 0 ? (
              <h5>{currentCount * item.model.newPrice} грн.</h5>
            ) : (
              <h5>{currentCount * item.model.price} грн.</h5>
            )}
          </div>
        </div>
      </div>
    );
  }
  if(isDesKtop){
    return (
      <div className="ItemPopupBasket">
        <img src={process.env.REACT_APP_API_URL + item.taste.photo} alt="" />
        <div className="wrapTextItemPopup">
          <div className="headItemPopup">
            <span>
              {item.type + " " + item.brand + " " + item.model.title + " "}{" "}
              {item.taste.title}
            </span>
            <p onClick={() => handleClick(item)}>Видалити</p>
          </div>
          <div className="footerItemPopup">
            {item.model.newPrice !== 0 ? (
              <h5>{item.model.newPrice} грн.</h5>
            ) : (
              <h5>{item.model.price} грн.</h5>
            )}
            <div className="counter">
              <div className="minus" onClick={() => handleDecrease()}>
                <div className="minusCont"></div>
              </div>
              <div className="count">{currentCount}</div>
              <div className="plus" onClick={() => handleIncrease()}>
                <div className="plusCont"></div>
              </div>
            </div>
            {item.model.newPrice !== 0 ? (
              <h5>{currentCount * item.model.newPrice} грн.</h5>
            ) : (
              <h5>{currentCount * item.model.price} грн.</h5>
            )}
          </div>
        </div>
      </div>
    );
  }
  
};

export default ItemPopupBasket;
