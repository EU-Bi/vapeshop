import React, { useState } from "react";
import "./Header.scss";
import Dropdown from "react-bootstrap/Dropdown";
import Subcategories from "./Subcategories";
import { Link } from "react-router-dom";
import CardBasket from "../CardProduct/CardBasket/CardBasket";
import ModalBasket from "../popups/ModalBasket";
import { connect } from "react-redux";
import store from "../../redux/store/store";
import {
  actionAddFilter,
  actionResetFilters,
} from "../../redux/actions/ActionFilters";
import ModalTelephone from "../telephone/ModalTelephone";
import { useMediaQuery } from "react-responsive";

const Header = ({ basket, total, brands, types, itemAdd }) => {
  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  const [modalShowTel, setModalShowTel] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const [isOpenSubcategories, setOpenSubcategories] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [currentBrand, setCurrentBrands] = useState([]);
  const [burger, openBurger] = useState(false);

  const handleOpenBurger = () => {
    openBurger(!burger);
  };
  const handleOpenSubcategories = (brands) => {
    setOpenSubcategories(!isOpenSubcategories);
    if (!isOpenSubcategories) {
      setCurrentBrands(brands);
    }
  };
  const Airis = brands.filter((brand) => brand.title === "Airis");
  const ElfBar = brands.filter((brand) => brand.title === "ElfBar");
  const VAAL = brands.filter((brand) => brand.title === "VAAL");
  const Elux = brands.filter((brand) => brand.title === "Elux 2%");

  const Odn = types.filter((type) => type.title === "Одноразки");
  const Pod = types.filter((type) => type.title === "POD-системи");
  const Liquid = types.filter((type) => type.title === "Рідіни");
  //const STRAW = brands.filter(brand=>brand.title==="STRAW")
  if (isMobile) {
    return (
      <div className="backgroundHeader">
        <div className="header">
          <div className="burger-menu" onClick={handleOpenBurger}></div>
          <Link to={"/"} className="logo" />

          {/* <Dropdown className="containerPhones">
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
          </Dropdown> */}
          <div className="containerSvg">
            {/* <div className="containerSearch">
              <input
                type="text"
                name=""
                id=""
                placeholder="Введіть ваш запит"
              />
              <div className="search"></div>
            </div> */}
            <div className="containerBasket">
              <div
                className="basket"
                onMouseEnter={() => {
                  setShowBasket(!showBasket);
                }}
                onClick={() => setModalShow(true)}
              ></div>
              <span>{basket.length}</span>
              {/* {showBasket && basket.length > 0 && (
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
              )} */}
            </div>
          </div>
          {itemAdd && <div className="addNewItem">Товар додано до кошика</div>}
          {/* {showBlock && (
            <div
              className="dropdownCategories"
              // onMouseEnter={() => setShowBlock(true)}
              onMouseLeave={() => {
                setShowBlock(false);
                setOpenSubcategories(false);
              }}
            >
              <ul>
                {types.map((type, index) => (
                  <li
                    key={index}
                    className="categoryItem"
                    onClick={() => {
                      handleOpenSubcategories(type.brands);
                    }}
                  >
                    <span>{type.title}</span>
                    <div className="arrow"></div>
                  </li>
                ))}
              </ul>
              {isOpenSubcategories && <Subcategories brands={currentBrand} />}
            </div>
          )} */}
        </div>
        <ModalBasket show={modalShow} onHide={() => setModalShow(false)} />
        {burger && (
          <div className="burgerOpenMenu">
            <div className="logoBlock">
              <Link to={"/"} className="logo" />
              <div className="close" onClick={handleOpenBurger}></div>
            </div>
            <Link
              to={"/catalog"}
              onClick={() => {
                handleOpenBurger();
                store.dispatch(actionResetFilters());
              }}
              className="btnCatalog"
              // onMouseLeave={() =>
              //   setTimeout(() => {
              //     if (showBlock) {
              //       setShowBlock(false);
              //     }
              //   }, 500)
              // }
            >
              <div className="dots"></div>
              Каталог товарів
            </Link>
            <ul className="menu-header">
              <li>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("types", Odn[0]));
                    handleOpenBurger();
                  }}
                  className="linkCurrentCatalog"
                >
                  Одноразки
                  <div className="arrowRight"></div>
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("types", Pod[0]));
                    handleOpenBurger();
                  }}
                  className="linkCurrentCatalog"
                >
                  POD-системи
                  <div className="arrowRight"></div>
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("types", Liquid[0]));
                    handleOpenBurger();
                  }}
                  className="linkCurrentCatalog"
                >
                  Рідини
                  <div className="arrowRight"></div>
                </Link>
              </li>
            </ul>
            <Link to={"/basket"} className="blockBasket">
              <div className="iconBasket"></div>
              <p>Кошик</p>
              <span>{basket.length}</span>
            </Link>
            <div className="listGoods">
              <Link to={"/clientinformation"} className="list">
                <div className="iconDelivery"></div>
                <p>Доставка та оплата</p>
              </Link>
              <Link to={"/clientinformation"} className="list">
                <div className="iconFAQ"></div>
                <p>Найчастіші питання</p>
              </Link>
              <Link to={"/wholesale"} className="list">
                <div className="iconOpt"></div>
                <p>Оптові замовлення</p>
              </Link>
              <Link to={"/clientinformation"} className="list">
                <div className="iconExchange"></div>
                <p>Обмін та повернення</p>
              </Link>
            </div>
            <div className="phoneWrap">
              <a className="phone" href="tel:+380972246961">
                <div className="icon"></div>
                <h3>+380 97 224 69 61</h3>
              </a>
              <a
                href="https://t.me/Manager_Vape_anad_Pods"
                className="telegram"
              >
                <div className="icon"></div>
                <h3>Telegram-чат</h3>
              </a>
              <a
                href="viber://chat?number=%2B380999187822"
                className="viber"
              >
                <div className="icon"></div>
                <h3>Viber</h3>
              </a>
              <div
                className="purplePhone"
                onClick={() => setModalShowTel(true)}
              >
                <div className="icon"></div>
                <h3>Замовити дзвінок</h3>
              </div>
            </div>
          </div>
        )}
        <ModalTelephone
          show={modalShowTel}
          onHide={() => setModalShowTel(false)}
        />
      </div>
    );
  }
  if (isTablet) {
    return (
      <div className="backgroundHeader">
        <div className="header">
          <div className="burger-menu" onClick={handleOpenBurger}></div>
          <Link to={"/"} className="logo" />

          {/* <Dropdown className="containerPhones">
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
          </Dropdown> */}
          <div className="containerSvg">
            {/* <div className="containerSearch">
              <input
                type="text"
                name=""
                id=""
                placeholder="Введіть ваш запит"
              />
              <div className="search"></div>
            </div> */}
            <div className="containerBasket">
              <div
                className="basket"
                onMouseEnter={() => {
                  setShowBasket(!showBasket);
                }}
                onClick={() => setModalShow(true)}
              ></div>
              <span>{basket.length}</span>
              {itemAdd && (
                <div className="addNewItem">Товар додано до кошика</div>
              )}
              {/* {showBasket && basket.length > 0 && (
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
              )} */}
            </div>
          </div>
          {/* {showBlock && (
            <div
              className="dropdownCategories"
              // onMouseEnter={() => setShowBlock(true)}
              onMouseLeave={() => {
                setShowBlock(false);
                setOpenSubcategories(false);
              }}
            >
              <ul>
                {types.map((type, index) => (
                  <li
                    key={index}
                    className="categoryItem"
                    onClick={() => {
                      handleOpenSubcategories(type.brands);
                    }}
                  >
                    <span>{type.title}</span>
                    <div className="arrow"></div>
                  </li>
                ))}
              </ul>
              {isOpenSubcategories && <Subcategories brands={currentBrand} />}
            </div>
          )} */}
        </div>
        <ModalBasket show={modalShow} onHide={() => setModalShow(false)} />
        {burger && (
          <div className="burgerOpenMenu">
            <div className="logoBlock">
              <Link to={"/"} className="logo" />
              <div className="close" onClick={handleOpenBurger}></div>
            </div>
            <Link
              to={"/catalog"}
              onClick={() => store.dispatch(actionResetFilters())}
              className="btnCatalog"
              // onMouseLeave={() =>
              //   setTimeout(() => {
              //     if (showBlock) {
              //       setShowBlock(false);
              //     }
              //   }, 500)
              // }
            >
              <div className="dots"></div>
              Каталог товарів
            </Link>
            <ul className="menu-header">
            <li>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("types", Odn[0]));
                    handleOpenBurger();
                  }}
                  className="linkCurrentCatalog"
                >
                  Одноразки
                  <div className="arrowRight"></div>
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("types", Pod[0]));
                    handleOpenBurger();
                  }}
                  className="linkCurrentCatalog"
                >
                  POD-системи
                  <div className="arrowRight"></div>
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalog"}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("types", Liquid[0]));
                    handleOpenBurger();
                  }}
                  className="linkCurrentCatalog"
                >
                  Рідини
                  <div className="arrowRight"></div>
                </Link>
              </li>
            </ul>
            <Link to={"/basket"} className="blockBasket">
              <div className="iconBasket"></div>
              <p>Кошик</p>
              <span>{basket.length}</span>
            </Link>
            <div className="listGoods">
              <Link to={"/clientinformation"} className="list">
                <div className="iconDelivery"></div>
                <p>Доставка та оплата</p>
              </Link>
              <Link to={"/clientinformation"} className="list">
                <div className="iconFAQ"></div>
                <p>Найчастіші питання</p>
              </Link>
              <Link to={"/wholesale"} className="list">
                <div className="iconOpt"></div>
                <p>Оптові замовлення</p>
              </Link>
              <Link to={"/clientinformation"} className="list">
                <div className="iconExchange"></div>
                <p>Обмін та повернення</p>
              </Link>
            </div>
            <div className="phoneWrap">
              <a href="tel:+380972246961" className="phone">
                <div className="icon"></div>
                <h3>+380(93)555-55-55</h3>
              </a>
              <a
                href="https://t.me/Manager_Vape_anad_Pods"
                className="telegram"
              >
                <div className="icon"></div>
                <h3>Telegram-чат</h3>
              </a>
              <a
                href="viber://chat?number=%2B380999187822"
                className="viber"
              >
                <div className="icon"></div>
                <h3>Viber</h3>
              </a>
              <div
                className="purplePhone"
                onClick={() => setModalShowTel(true)}
              >
                <div className="icon"></div>
                <h3>Замовити дзвінок</h3>
              </div>
            </div>
          </div>
        )}
        <ModalTelephone
          show={modalShowTel}
          onHide={() => setModalShowTel(false)}
        />
      </div>
    );
  }
  if (isDesKtop) {
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
                  store.dispatch(actionAddFilter("brands", ElfBar[0]));
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
                  store.dispatch(actionAddFilter("brands", VAAL[0]));
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
                  store.dispatch(actionAddFilter("brands", Airis[0]));
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
                  store.dispatch(actionAddFilter("brands", Elux[0]));
                }}
                className="linkCurrentCatalog"
              >
                Elux 2%
              </Link>
            </li>
          </ul>
          <Dropdown className="containerPhones">
            <Dropdown.Toggle id="dropdown-autoclose-true" className=" phones">
              +380 (97) 224 69 61
            </Dropdown.Toggle>

            <Dropdown.Menu className="menuPhones">
              <Dropdown.Item>+380(99)918 78 22</Dropdown.Item>
              <Dropdown.Item
                className="telegaContainer"
                href="https://t.me/Manager_Vape_anad_Pods"
              >
                <div className="telegram"></div>
                Telegram-чат
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="containerSvg">
            {/* <div className="containerSearch">
              <input
                type="text"
                name=""
                id=""
                placeholder="Введіть ваш запит"
              />
              <div className="search"></div>
            </div> */}
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
              {itemAdd && (
                <div className="addNewItem">Товар додано до кошика</div>
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
                {types.map((type, index) => (
                  <li
                    key={index}
                    className="categoryItem"
                    onClick={() => {
                      handleOpenSubcategories(type.brands);
                    }}
                  >
                    <span>{type.title}</span>
                    <div className="arrow"></div>
                  </li>
                ))}
              </ul>
              {isOpenSubcategories && <Subcategories brands={currentBrand} />}
            </div>
          )}
        </div>
        <ModalBasket show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    );
  }
};

export default connect((state) => ({
  basket: state.basket.basket,
  total: state.basket.total,
  brands: state.items.brands,
  types: state.items.types,
  itemAdd: state.page.itemAdd,
}))(Header);
