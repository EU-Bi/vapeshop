import React, { useState } from "react";
import "./MainItemPage.scss";
import { Link } from "react-router-dom";
import ModalBuyOneClick from "../../components/popups/ModalBuyOneClick";
import store from "../../redux/store/store";
import { actionAddItemInBasket } from "../../redux/actions/ActionsBasket";

const MainItemPage = ({ device }) => {
  const [value, setValue] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  const handleClick = (item, count) => {
    store.dispatch(actionAddItemInBasket({ item, count }));
  };
  const handleClickIncrease = (value) => {
    if (value < device.count) {
      setValue((prev) => prev + 1);
    }
  };
  const handleClickDecrease = (value) => {
    if (value > 1) {
      setValue((prev) => prev - 1);
    }
  };
  return (
    <div className="wrapMainItemPage">
      <img src={process.env.REACT_APP_API_URL + device.img} alt="" />
      <section>
        <h1>
          {device.type.title} {device.brand.title} {device.model.title} Mango
          Peach
        </h1>
        <p>{device.model.description}</p>
        <h2>{device.model.price} грн</h2>
        {device.count ? (
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
            <div onClick={() => handleClickDecrease(value)}>-</div>
            <div>{value}</div>
            <div onClick={() => handleClickIncrease(value)}>+</div>
          </div>
          <label className="dropdownTastes">
            <select
              className="wrapDropDownTastes"
              //   onChange={handleChange}
              //   value={value}
            >
              <option value="" selected disabled hidden>
                Сортувати за
              </option>
              {/* {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))} */}
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
};

export default MainItemPage;
