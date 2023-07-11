import React from "react";
import { useLocation } from "react-router-dom";

const Characteristics = () => {
  const location = useLocation();
  const device = location.state;
  return (
    <div className="wrapDescription">
      <h4>
        Характеристики {device.brand} {device.model.title}:
      </h4>
      <p>Кількість тяг: {device.model.info.countSmoke}</p>
      <p>Ємність акумулятора: {device.model.info.power} mAh</p>
      <p>Міцність нікотину: {device.model.info.nicotine}%</p>
      <p>
        Можливість підзарядки:{" "}
        {device.model.info.charge ? "можлива" : "не можлива"}{" "}
      </p>
    </div>
  );
};

export default Characteristics;
