import React from "react";
import { Link, Outlet } from "react-router-dom";

const InfoItem = ({ device }) => {
  return (
    <div className="wrapInfo">
      <div className="wrapLinks">
        <Link
          className="linksInfo active"
          to={`/device/${device.brand + device.model.title}/description`}
          state={device}
        >
          Опис
        </Link>
        <Link
          className="linksInfo active"
          to={`/device/${device.brand + device.model.title}/characteristics`}
          state={device}
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
        <Outlet device={device} />
      </div>
    </div>
  );
};

export default InfoItem;
