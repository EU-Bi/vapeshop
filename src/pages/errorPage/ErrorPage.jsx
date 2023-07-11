import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  if(isMobile){
    return (
      <div className="containerError">
        <Header />
        <div className="wrapper">
          <div className="robot"></div>
          <div className="containerText">
            <h3>Хмм... Щось пішло не так </h3>
            <span>
              Але не засмучуйтеся! Перейдіть на головну сторінку та продовжуйте
              свої покупки.
            </span>
            <Link to={"/"}>
              Повернутись на головну сторінку
              <div className="arrowError"></div>
            </Link>
          </div>
        </div>
        <div className="waves"></div>
      </div>
    );
  }
  if(isTablet){
    return (
      <div className="containerError">
        <Header />
        <div className="wrapper">
          <div className="robot"></div>
          <div className="containerText">
            <h3>Хмм... Щось пішло не так </h3>
            <span>
              Але не засмучуйтеся! Перейдіть на головну сторінку та продовжуйте
              свої покупки.
            </span>
            <Link to={"/"}>
              Повернутись на головну сторінку
              <div className="arrowError"></div>
            </Link>
          </div>
        </div>
        <div className="waves"></div>
      </div>
    );
  }
  if(isDesKtop){
    return (
      <div className="containerError">
        <Header />
        <div className="wrapper">
          <div className="robot"></div>
          <div className="containerText">
            <h3>Хмм... Щось пішло не так </h3>
            <span>
              Але не засмучуйтеся! Перейдіть на головну сторінку та продовжуйте
              свої покупки.
            </span>
            <Link to={"/"}>
              Повернутись на головну сторінку
              <div className="arrowError"></div>
            </Link>
          </div>
        </div>
        <div className="waves"></div>
      </div>
    );
  }
 
};

export default ErrorPage;
