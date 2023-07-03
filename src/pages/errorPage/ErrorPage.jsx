import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./ErrorPage.scss";

const ErrorPage = () => {
  const [device, setDevice] = useState("");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTablet = useMediaQuery({ query: "(max-width: 1224px )" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  useEffect(() => {
    isDesktopOrLaptop && setDevice("desktop");
    isTablet && setDevice("tablet");
    isMobile && setDevice("mobile");
  }, [isDesktopOrLaptop, isMobile, isTablet]);

  return (
    <div className="containerError">
      <Header device={device} />
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
};

export default ErrorPage;
