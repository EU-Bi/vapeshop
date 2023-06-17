import React, { useState } from "react";
import "./MainItemPage.scss";
import { Link } from "react-router-dom";
import ModalBuyOneClick from "../../components/popups/ModalBuyOneClick";
import store from "../../redux/store/store";
import { actionAddItemInBasket } from "../../redux/actions/ActionsBasket";

const MainItemPage = ({device}) => {
  const [value, setValue] = useState(1);
  const [modalShow, setModalShow] = useState(false);

  const handleClick = (item) => {
    store.dispatch(actionAddItemInBasket({ item }));
  };
  const handleClickIncrease = (value) => {
    setValue(value + 1);
  };
  const handleClickDecrease = (value) => {
    setValue(value - 1);
  };
  const count = 1;
  return (
    <div className="wrapMainItemPage">
      <img src="" alt="" srcset="" />
      <section>
        <h1>Одноразова сигарета Elf Bar BC3000 Mango Peach</h1>
        <p>поєднує в собі екзотичний смак манго зі солодкістю персика</p>
        <h2>500 грн</h2>
        {count ? (
          <div>
            <div className="pointIs"></div>
            <p>У наявності</p>
          </div>
        ) : (
          <div>
            <div className="pointNot"></div>
            <p>У наявності</p>
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
          <div className="addInBasket" onClick={()=>handleClick(device)}>додати в кошик</div>
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
          <Link className="link">детальніше</Link>
        </div>
      </section>
    </div>
  );
};

export default MainItemPage;
