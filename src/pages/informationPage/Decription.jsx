import React from "react";
import { useLocation } from "react-router-dom";

const Description = () => {
  const location = useLocation();
  const device = location.state;
  return (
    <div className="wrapDescription">
      <h4>
        Основні характеристики {device.brand} {device.model.title}:
      </h4>
      <p>Кількість тяг: {device.model.info.countSmoke}</p>
      <p>Ємність акумулятора: {device.model.info.power} mAh</p>
      <p>Міцність нікотину: {device.model.info.nicotine}%</p>
      <p>
        Можливість підзарядки:{" "}
        {device.model.info.charge ? "можлива" : "не можлива"}{" "}
      </p>
      <h5 className="peculiarities">Особливості:</h5>
      <ul>
        <li>{device.model.info.description}</li>
      </ul>
      <h6 className="attention">УВАГА!</h6>
      <span>
        Кількість затяжок, вказана виробником, є приблизною. Залежно від стилю
        ширяння цей параметр у різних користувачів може суттєво відрізнятися.
      </span>
    </div>
  );
};

export default Description;
