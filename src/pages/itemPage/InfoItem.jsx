import React from "react";
import { Link, Outlet } from "react-router-dom";

const InfoItem = () => {
  return (
    <div className="wrapInfo">
      <div className="wrapLinks">
        <Link
          className="linksInfo active"
          to={"/catalog/elfbarBC4000/description"}
        >
          Опис
        </Link>
        <Link
          className="linksInfo active"
          to={"/catalog/elfbarBC4000/characteristics"}
        >
          Характеристики
        </Link>
        <Link className="linksInfo active" to={"/clientinformation"}>
          Доставка
        </Link>
        <Link className="linksInfo active" to={"/clientinformation"}>
          Оплата
        </Link>
      </div>
      <div className="wrapPagesInfo" id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default InfoItem;
