import React, { useEffect, useState } from "react";
import "./Header.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { Subcategories } from "./Subcategories";
import { Link } from "react-router-dom";
import CardBasket from "../CardProduct/CardBasket/CardBasket";
import ModalBasket from "../popups/ModalBasket";
import { connect } from "react-redux";
import store from "../../redux/store/store";
import {
  actionAddFilter,
  actionResetFilters,
} from "../../redux/actions/ActionFilters";

const Header = ({ basket, total, brands }) => {
  const [showBlock, setShowBlock] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [isOpenSubcategories, setOpenSubcategories] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleOpenSubcategories = (id) => {
    setOpenSubcategories(!isOpenSubcategories);
    if (!isOpenSubcategories) {
      console.log(id);
    }
  };
  return (
    <div className="backgroundHeader">
      <div className="header">
        <Link to={"/"} className="logo" />
        <Link
          to={"/catalog"}
          onClick={() => store.dispatch(actionResetFilters())}
          className="btnCatalog"
          onMouseEnter={() => setShowBlock(true)}

          // onMouseLeave={() =>
          //   setTimeout(() => {
          //     if (showBlock) {
          //       setShowBlock(false);
          //     }
          //   }, 500)
          // }
        >
          КАТАЛОГ
          <div className="dots"></div>
        </Link>
        <ul className="menu-header">
          <li>
            <Link
              to={"/catalog"}
              onClick={() => {
                store.dispatch(actionResetFilters());
                store.dispatch(actionAddFilter("brands", brands[0]));
              }}
              className="linkCurrentCatalog"
            >
              Elf Bar
            </Link>
          </li>
          <li>
            <Link
              to={"/catalog"}
              onClick={() => {
                store.dispatch(actionResetFilters());
                store.dispatch(actionAddFilter("brands", brands[2]));
              }}
              className="linkCurrentCatalog"
            >
              VAAL
            </Link>
          </li>
          <li>
            <Link
              to={"/catalog"}
              onClick={() => {
                store.dispatch(actionResetFilters());
                store.dispatch(actionAddFilter("brands", brands[1]));
              }}
              className="linkCurrentCatalog"
            >
              Airis-Pod System
            </Link>
          </li>
          <li>
            <Link
              to={"/catalog"}
              onClick={() => {
                store.dispatch(actionResetFilters());
                store.dispatch(actionAddFilter("brands", brands[3]));
              }}
              className="linkCurrentCatalog"
            >
              Elux 2%
            </Link>
          </li>
        </ul>
        <Dropdown className="containerPhones">
          <Dropdown.Toggle id="dropdown-autoclose-true" className=" phones">
            +380(93)555-55-55
          </Dropdown.Toggle>

          <Dropdown.Menu className="menuPhones">
            <Dropdown.Item>+380(95)555-55-55</Dropdown.Item>
            <Dropdown.Item>+380(95)555-55-55</Dropdown.Item>
            <Dropdown.Item className="telegaContainer">
              <div className="telegram"></div>
              Telegram-чат
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="containerSvg">
          <div className="containerSearch">
            <input type="text" name="" id="" placeholder="Введіть ваш запит" />
            <div className="search"></div>
          </div>
          <div className="containerBasket">
            <div
              className="basket"
              onMouseEnter={() => {
                setShowBasket(!showBasket);
              }}
              onClick={() => setModalShow(true)}
            ></div>
            <span>{basket.length}</span>
            {showBasket && basket.length > 0 && (
              <div
                className="basketHoverWrap"
                onMouseLeave={() => {
                  setShowBasket(false);
                }}
              >
                <h4>Кошик</h4>
                <div className="wrapCardBasketTut">
                  {basket.map(({ device, countDevice }, key) => (
                    <CardBasket item={device} count={countDevice} key={key} />
                  ))}
                </div>
                <div className="footerBasket">
                  <Link to={"/basket"}>В кошик</Link>
                  <div className="wrapTotalBtn">
                    <h5>{total} грн.</h5>
                    <Link to={"/basket"}>Оформити</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {showBlock && (
          <div
            className="dropdownCategories"
            // onMouseEnter={() => setShowBlock(true)}
            onMouseLeave={() => {
              setShowBlock(false);
              setOpenSubcategories(false);
            }}
          >
            <ul>
              <li
                className="categoryItem"
                onClick={(e) => {
                  handleOpenSubcategories(e.target.id);
                }}
              >
                <span id="Odnorazki">Одноразові сигарети</span>
                <div className="arrow"></div>
              </li>
              <li
                className="categoryItem"
                onClick={(e) => {
                  handleOpenSubcategories(e.target.id);
                }}
              >
                <span>POD-системи</span>
                <div className="arrow"></div>
              </li>
              <li
                className="categoryItem"
                onClick={(e) => {
                  handleOpenSubcategories(e.target.id);
                }}
              >
                <span>Картриджі</span>
                <div className="arrow"></div>
              </li>
            </ul>
            {isOpenSubcategories && <Subcategories />}
          </div>
        )}
      </div>
      <ModalBasket show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default connect((state) => ({
  basket: state.basket.basket,
  total: state.basket.total,
  brands: state.items.brands,
}))(Header);
