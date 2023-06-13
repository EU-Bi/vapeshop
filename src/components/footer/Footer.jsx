import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const arr = [
    "Elf Bar",
    "VAAL",
    "Elux 2%",
    "Straw",
    "Oxbar",
    "POD-система Airis",
    "POD-система Elf Bar",
    "Картриджі",
  ];
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
            {arr.map((item, index) => (
              <Link key={index}>{item}</Link>
            ))}
          </div>
          <div className="information">
            <h5>ІНФОРМАЦІЯ</h5>
            <Link to={'/clientinformation'}>Умови доставки</Link>
            <Link to={'/clientinformation'}>Умови оплати</Link>
            <Link to={'/clientinformation'}>Найчастіші питання</Link>
            <Link to={'/clientinformation'}>Обмін та повернення</Link>
            <Link to={'/wholesale'}>Оптові замовлення</Link>
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
};

export default Footer;
