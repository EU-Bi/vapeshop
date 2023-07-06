import React, { useState } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import store from "../../redux/store/store";
import { connect } from "react-redux";
import {
  actionAddFilter,
  actionResetFilters,
} from "../../redux/actions/ActionFilters";
import { useMediaQuery } from "react-responsive";

const Footer = ({ brands }) => {
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenContacts, setIsOpenContacts] = useState(false);

  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });

  const handleClickOpen = (query) => {
    if (query === "catalog") {
      setIsOpenCatalog(!isOpenCatalog);
    }
    if (query === "info") {
      setIsOpenInfo(!isOpenInfo);
    }
    if (query === "contacts") {
      setIsOpenContacts(!isOpenContacts);
    }
  };

  if (isTablet) {
    return (
      <div className="footer">
        <div className="wrapperFooter">
          <div className="containerTop">
            <div className="columnLogo">
              <div className="logo"></div>
              <div className="schedule">Графік роботи: Пн-Нд: 10:00-21:00</div>
              <div className="socialMedia">
                <p>Ми в соціальних мережах: </p>
                <div className="wrapSocialMedia">
                  <div className="tg"></div>
                  <div className="inst"></div>
                </div>
              </div>
            </div>
            <div className="catalog">
              <h5>КАТАЛОГ</h5>
              {brands.map((item, index) => (
                <Link
                  to={"/catalog"}
                  key={index}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", item));
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="information">
              <h5>ІНФОРМАЦІЯ</h5>
              <Link to={"/clientinformation"}>Умови доставки</Link>
              <Link to={"/clientinformation"}>Умови оплати</Link>
              <Link to={"/clientinformation"}>Найчастіші питання</Link>
              <Link to={"/clientinformation"}>Обмін та повернення</Link>
              <Link to={"/wholesale"}>Оптові замовлення</Link>
            </div>
            <div className="contacts">
              <h5>КОНТАКТИ</h5>
              <p>+380(93)555-55-55</p>
              <p>vaal@gmail.com</p>
              <p>Telegram</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="containerBottom">
            <div>© 2023 Vape&Pods Shop </div>
            <div className="politics">
              <p>Політика конфіденційності</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (isMobile) {
    return (
      <div className="footer">
        <div className="wrapperFooter">
          <div className="containerTop">
            <div className="columnLogo">
              <div className="logo"></div>
            </div>
            <div className="catalog">
              <div
                className="wrapHead"
                onClick={() => handleClickOpen("catalog")}
              >
                <h5>КАТАЛОГ</h5>
                {isOpenCatalog ? (
                  <div className="arrowVertical"></div>
                ) : (
                  <div className="arrowVertical nonActive"></div>
                )}
              </div>

              {isOpenCatalog && (
                <div className="wrapLinks">
                  {brands.map((item, index) => (
                    <Link
                      to={"/catalog"}
                      key={index}
                      onClick={() => {
                        store.dispatch(actionResetFilters());
                        store.dispatch(actionAddFilter("brands", item));
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="information">
              <div className="wrapHead" onClick={() => handleClickOpen("info")}>
                <h5>ІНФОРМАЦІЯ</h5>
                {isOpenInfo ? (
                  <div className="arrowVertical"></div>
                ) : (
                  <div className="arrowVertical nonActive"></div>
                )}
              </div>
              {isOpenInfo && (
                <div className="wrapLinks">
                  <Link to={"/clientinformation"}>Умови доставки</Link>
                  <Link to={"/clientinformation"}>Умови оплати</Link>
                  <Link to={"/clientinformation"}>Найчастіші питання</Link>
                  <Link to={"/clientinformation"}>Обмін та повернення</Link>
                  <Link to={"/wholesale"}>Оптові замовлення</Link>
                </div>
              )}
            </div>
            <div className="contacts">
              <div
                className="wrapHead"
                onClick={() => handleClickOpen("contacts")}
              >
                <h5>КОНТАКТИ</h5>
                {isOpenContacts ? (
                  <div className="arrowVertical"></div>
                ) : (
                  <div className="arrowVertical nonActive"></div>
                )}
              </div>
              {isOpenContacts && (
                <div className="wrapLinks">
                  <p>+380(93)555-55-55</p>
                  <p>vaal@gmail.com</p>
                  <p>Telegram</p>
                </div>
              )}
            </div>
            <div className="socialMedia">
              <p>Ми в соціальних мережах: </p>
              <div className="wrapSocialMedia">
                <div className="tg"></div>
                <div className="inst"></div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="containerBottom">
            <div>© 2023 Vape&Pods Shop </div>
            <div className="politics">
              <p>Політика конфіденційності</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (isDesKtop) {
    return (
      <div className="footer">
        <div className="wrapperFooter">
          <div className="containerTop">
            <div className="columnLogo">
              <div className="logo"></div>
              <div className="schedule">Графік роботи: Пн-Нд: 10:00-21:00</div>
              <div className="socialMedia">
                <p>Ми в соціальних мережах: </p>
                <div className="wrapSocialMedia">
                  <div className="tg"></div>
                  <div className="inst"></div>
                </div>
              </div>
            </div>
            <div className="catalog">
              <h5>КАТАЛОГ</h5>
              {brands.map((item, index) => (
                <Link
                  to={"/catalog"}
                  key={index}
                  onClick={() => {
                    store.dispatch(actionResetFilters());
                    store.dispatch(actionAddFilter("brands", item));
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="information">
              <h5>ІНФОРМАЦІЯ</h5>
              <Link to={"/clientinformation"}>Умови доставки</Link>
              <Link to={"/clientinformation"}>Умови оплати</Link>
              <Link to={"/clientinformation"}>Найчастіші питання</Link>
              <Link to={"/clientinformation"}>Обмін та повернення</Link>
              <Link to={"/wholesale"}>Оптові замовлення</Link>
            </div>
            <div className="contacts">
              <h5>КОНТАКТИ</h5>
              <p>+380(93)555-55-55</p>
              <p>vaal@gmail.com</p>
              <p>Telegram</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="containerBottom">
            <div>© 2023 Vape&Pods Shop </div>
            <div className="politics">
              <p>Політика конфіденційності</p>
              <p>Договір оферти</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect((state) => ({ brands: state.items.brands }))(Footer);
