import React, { useEffect, useState } from "react";
import "./MainItemPage.scss";
import { Link } from "react-router-dom";
import ModalBuyOneClick from "../../components/popups/ModalBuyOneClick";
import store from "../../redux/store/store";
import { actionAddItemInBasket } from "../../redux/actions/ActionsBasket";
import { useMediaQuery } from "react-responsive";

const MainItemPage = ({ device, similarDevices }) => {
  const [value, setValue] = useState(1);
  const [deviceRef, setDevice] = useState(device);
  const [modalShow, setModalShow] = useState(false);
  const [taste, setTaste] = useState(device.taste.title);
  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  useEffect(() => {
    setDevice(similarDevices.filter((dev) => dev.taste.title === taste)[0]);
  }, [taste, similarDevices]);

  useEffect(() => {
    setDevice(device);
  }, [device]);
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

  if (isMobile) {
    return (
      <div className="wrapMainItemPage">
        <img
          src={process.env.REACT_APP_API_URL + deviceRef.taste.photo}
          alt=""
        />
        <section>
          <h1>
            {deviceRef.type} {deviceRef.brand.title} {deviceRef.model.title}{" "}
            {deviceRef.taste.title}
          </h1>
          <p>{deviceRef.taste.description}</p>
          {deviceRef.model.newPrice !== 0 ? (
            <div className="newPrice">
              <h2>{deviceRef.model.newPrice} грн</h2>
              <h3>{deviceRef.model.price} грн</h3>
            </div>
          ) : (
            <h2>{deviceRef.model.price} грн</h2>
          )}

          {deviceRef.taste.count ? (
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
                onChange={(e) => setTaste(e.target.value)}
                value={taste}
              >
                {/* <option value={device.taste.title} selected disabled hidden>
                  {device.taste.title}
                </option> */}
                {deviceRef.model.tastes.map((option) => (
                  <option value={option.title}>{option.title}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="buttonsWrap">
            <div
              className="addInBasket"
              onClick={() => handleClick(deviceRef, value)}
            >
              додати в кошик
            </div>
            <div className="buyInOneClick" onClick={() => setModalShow(true)}>
              купити в 1 клік
            </div>
            <ModalBuyOneClick
              show={modalShow}
              onHide={() => setModalShow(false)}
              item={deviceRef}
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
  if (isTablet) {
    return (
      <div className="wrapMainItemPage">
        <img
          src={process.env.REACT_APP_API_URL + deviceRef.taste.photo}
          alt=""
        />
        <section>
          <h1>
            {deviceRef.type} {deviceRef.brand.title} {deviceRef.model.title}{" "}
            {deviceRef.taste.title}
          </h1>
          <p>{deviceRef.taste.description}</p>
          {deviceRef.model.newPrice !== 0 ? (
            <div className="newPrice">
              <h2>{deviceRef.model.newPrice} грн</h2>
              <h3>{deviceRef.model.price} грн</h3>
            </div>
          ) : (
            <h2>{deviceRef.model.price} грн</h2>
          )}

          {deviceRef.taste.count ? (
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
                onChange={(e) => setTaste(e.target.value)}
                value={taste}
              >
                {/* <option value="" selected disabled hidden>
                  {device.taste.title}
                </option> */}
                {deviceRef.model.tastes.map((option) => (
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
              item={deviceRef}
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
  if (isDesKtop) {
    return (
      <div className="wrapMainItemPage">
        <img
          src={process.env.REACT_APP_API_URL + deviceRef.taste.photo}
          alt=""
        />
        <section>
          <h1>
            {deviceRef.type} {deviceRef.brand.title} {deviceRef.model.title}{" "}
            {deviceRef.taste.title}
          </h1>
          <p>{deviceRef.taste.description}</p>
          {deviceRef.model.newPrice !== 0 ? (
            <div className="newPrice">
              <h2>{deviceRef.model.newPrice} грн</h2>
              <h3>{deviceRef.model.price} грн</h3>
            </div>
          ) : (
            <h2>{deviceRef.model.price} грн</h2>
          )}

          {deviceRef.taste.count ? (
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
                onChange={(e) => setTaste(e.target.value)}
                value={taste}
              >
                {/* <option value="" selected disabled hidden>
                  {device.taste.title}
                </option> */}
                {deviceRef.model.tastes.map((option) => (
                  <option value={option.title}>{option.title}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="buttonsWrap">
            <div
              className="addInBasket"
              onClick={() => handleClick(deviceRef, value)}
            >
              додати в кошик
            </div>
            <div className="buyInOneClick" onClick={() => setModalShow(true)}>
              купити в 1 клік
            </div>
            <ModalBuyOneClick
              show={modalShow}
              onHide={() => setModalShow(false)}
              item={deviceRef}
              count={value}
            />
          </div>
          <h5>Характеристики</h5>
          <div className="characteristics">
            <div className="types">
              <p>Кількість затяжок:</p>
              <span>{deviceRef.model.info.countSmoke}</span>
            </div>
            <div className="types">
              <p>Ємність акумулятора:</p>
              <span>{deviceRef.model.info.power} mAh</span>
            </div>
            <div className="types">
              <p>Рівень нікотина:</p>
              <span>
                {deviceRef.model.info.nicotine}% (
                {deviceRef.model.info.nicotine * 10} мг)
              </span>
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
