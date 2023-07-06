import React, { useState } from "react";
import "./MainItemPage.scss";
import { Link } from "react-router-dom";
import ModalBuyOneClick from "../../components/popups/ModalBuyOneClick";
import store from "../../redux/store/store";
import { actionAddItemInBasket } from "../../redux/actions/ActionsBasket";
import { useMediaQuery } from "react-responsive";

const MainItemPage = ({ device }) => {
  const [value, setValue] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  const handleClick = (item, count) => {
    store.dispatch(actionAddItemInBasket({ item, count }));
  };
  const handleClickIncrease = (value) => {
    if (value < device.taste.count) {
      setValue((prev) => prev + 1);
    }
  };
  const handleClickDecrease = (value) => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };
  if(isMobile){
    return (
      <div className="wrapMainItemPage">
        <img src={process.env.REACT_APP_API_URL + device.taste.photo} alt="" />
        <section>
          <h1>
            {device.type} {device.brand.title} {device.model.title}{" "}
            {device.taste.title}
          </h1>
          <p>{device.taste.description}</p>
          {device.model.newPrice !== 0 ? (
            <div className="newPrice">
              <h2>{device.model.newPrice} грн</h2>
              <h3>{device.model.price} грн</h3>
            </div>
          ) : (
            <h2>{device.model.price} грн</h2>
          )}
  
          {device.taste.count ? (
            <div>
              <div className="pointIs"></div>
              <p>У наявності</p>
            </div>
          ) : (
            <div>
              <div className="pointNot"></div>
              <p>Немає в наявності</p>
            </div>
          )}
          <div className="wrapClickField">
            <div className="containerCount">
              <div
                onClick={() => handleClickDecrease(value)}
                className="minustutut"
              ></div>
              <div>{value}</div>
              <div
                onClick={() => handleClickIncrease(value)}
                className="plustutut"
              ></div>
            </div>
            <label className="dropdownTastes">
              <select
                className="wrapDropDownTastes"
                //   onChange={handleChange}
                //   value={value}
              >
                <option value="" selected disabled hidden>
                  {device.taste.title}
                </option>
                {device.model.tastes.map((option) => (
                  <option value={option.title}>{option.title}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="buttonsWrap">
            <div
              className="addInBasket"
              onClick={() => handleClick(device, value)}
            >
              додати в кошик
            </div>
            <div className="buyInOneClick" onClick={() => setModalShow(true)}>
              купити в 1 клік
            </div>
            <ModalBuyOneClick
              show={modalShow}
              onHide={() => setModalShow(false)}
              item={device}
              count={value}
            />
          </div>
          {/* <h5>Характеристики</h5>
          <div className="characteristics">
            <div className="types">
              <p>Кількість затяжок:</p>
              <span>3000</span>
            </div>
            <div className="types">
              <p>Ємність акумулятора:</p>
              <span>650 mAh</span>
            </div>
            <div className="types">
              <p>Рівень нікотина:</p>
              <span>5% (50 мг)</span>
            </div>
          </div>
          <h5>Доставка</h5>
          <div className="delivery">
            <div className="carDelivery"></div>
            <p className="nameDelivery">Відділення Нової Пошти</p>
            <p className="timeDelivery">доставка 1-2 дні</p>
            <Link className="link" to={"/clientinformation"}>
              детальніше
            </Link>
          </div> */}
        </section>
      </div>
    );
  }
  if(isTablet){
    return (
      <div className="wrapMainItemPage">
        <img src={process.env.REACT_APP_API_URL + device.taste.photo} alt="" />
        <section>
          <h1>
            {device.type} {device.brand.title} {device.model.title}{" "}
            {device.taste.title}
          </h1>
          <p>{device.taste.description}</p>
          {device.model.newPrice !== 0 ? (
            <div className="newPrice">
              <h2>{device.model.newPrice} грн</h2>
              <h3>{device.model.price} грн</h3>
            </div>
          ) : (
            <h2>{device.model.price} грн</h2>
          )}
  
          {device.taste.count ? (
            <div>
              <div className="pointIs"></div>
              <p>У наявності</p>
            </div>
          ) : (
            <div>
              <div className="pointNot"></div>
              <p>Немає в наявності</p>
            </div>
          )}
          <div className="wrapClickField">
            <div className="containerCount">
              <div
                onClick={() => handleClickDecrease(value)}
                className="minustutut"
              ></div>
              <div>{value}</div>
              <div
                onClick={() => handleClickIncrease(value)}
                className="plustutut"
              ></div>
            </div>
            <label className="dropdownTastes">
              <select
                className="wrapDropDownTastes"
                //   onChange={handleChange}
                //   value={value}
              >
                <option value="" selected disabled hidden>
                  {device.taste.title}
                </option>
                {device.model.tastes.map((option) => (
                  <option value={option.title}>{option.title}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="buttonsWrap">
            <div
              className="addInBasket"
              onClick={() => handleClick(device, value)}
            >
              додати в кошик
            </div>
            <div className="buyInOneClick" onClick={() => setModalShow(true)}>
              купити в 1 клік
            </div>
            <ModalBuyOneClick
              show={modalShow}
              onHide={() => setModalShow(false)}
              item={device}
              count={value}
            />
          </div>
          {/* <h5>Характеристики</h5>
          <div className="characteristics">
            <div className="types">
              <p>Кількість затяжок:</p>
              <span>3000</span>
            </div>
            <div className="types">
              <p>Ємність акумулятора:</p>
              <span>650 mAh</span>
            </div>
            <div className="types">
              <p>Рівень нікотина:</p>
              <span>5% (50 мг)</span>
            </div>
          </div>
          <h5>Доставка</h5>
          <div className="delivery">
            <div className="carDelivery"></div>
            <p className="nameDelivery">Відділення Нової Пошти</p>
            <p className="timeDelivery">доставка 1-2 дні</p>
            <Link className="link" to={"/clientinformation"}>
              детальніше
            </Link>
          </div> */}
        </section>
      </div>
    );
  }
  if(isDesKtop){
    return (
      <div className="wrapMainItemPage">
        <img src={process.env.REACT_APP_API_URL + device.taste.photo} alt="" />
        <section>
          <h1>
            {device.type} {device.brand.title} {device.model.title}{" "}
            {device.taste.title}
          </h1>
          <p>{device.taste.description}</p>
          {device.model.newPrice !== 0 ? (
            <div className="newPrice">
              <h2>{device.model.newPrice} грн</h2>
              <h3>{device.model.price} грн</h3>
            </div>
          ) : (
            <h2>{device.model.price} грн</h2>
          )}
  
          {device.taste.count ? (
            <div>
              <div className="pointIs"></div>
              <p>У наявності</p>
            </div>
          ) : (
            <div>
              <div className="pointNot"></div>
              <p>Немає в наявності</p>
            </div>
          )}
          <div className="wrapClickField">
            <div className="containerCount">
              <div
                onClick={() => handleClickDecrease(value)}
                className="minustutut"
              ></div>
              <div>{value}</div>
              <div
                onClick={() => handleClickIncrease(value)}
                className="plustutut"
              ></div>
            </div>
            <label className="dropdownTastes">
              <select
                className="wrapDropDownTastes"
                //   onChange={handleChange}
                //   value={value}
              >
                <option value="" selected disabled hidden>
                  {device.taste.title}
                </option>
                {device.model.tastes.map((option) => (
                  <option value={option.title}>{option.title}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="buttonsWrap">
            <div
              className="addInBasket"
              onClick={() => handleClick(device, value)}
            >
              додати в кошик
            </div>
            <div className="buyInOneClick" onClick={() => setModalShow(true)}>
              купити в 1 клік
            </div>
            <ModalBuyOneClick
              show={modalShow}
              onHide={() => setModalShow(false)}
              item={device}
              count={value}
            />
          </div>
          <h5>Характеристики</h5>
          <div className="characteristics">
            <div className="types">
              <p>Кількість затяжок:</p>
              <span>3000</span>
            </div>
            <div className="types">
              <p>Ємність акумулятора:</p>
              <span>650 mAh</span>
            </div>
            <div className="types">
              <p>Рівень нікотина:</p>
              <span>5% (50 мг)</span>
            </div>
          </div>
          <h5>Доставка</h5>
          <div className="delivery">
            <div className="carDelivery"></div>
            <p className="nameDelivery">Відділення Нової Пошти</p>
            <p className="timeDelivery">доставка 1-2 дні</p>
            <Link className="link" to={"/clientinformation"}>
              детальніше
            </Link>
          </div>
        </section>
      </div>
    );
  }

};

export default MainItemPage;
