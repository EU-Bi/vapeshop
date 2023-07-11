import React, { useState } from "react";
import "./ModalBuyOneClick.scss";
import { Modal } from "react-bootstrap";
import SendMessageBuyOneClick from "../../functions/SendMessageBuyOneClick";
import convertPhoneNumber from "../../functions/ConvertPhone";

const ModalBuyOneClick = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleClick = (name, phone) => {
    SendMessageBuyOneClick(name, phone, props.item, props.count);
    setName("");
    setPhone("");
    props.onHide();
  };
  return (
    <Modal {...props} centered>
      <div className="wrapModalBuyOne">
        <div className="closeModal" onClick={props.onHide}></div>
        <h3>Зробіть замовлення в 1 клік</h3>
        <p>Наш менеджер перетелефонує вам та оформить замовлення по телефону</p>
        <input
          type="text"
          placeholder="Ваше ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ваш номер телефону"
          value={phone}
          onChange={(e) => setPhone(convertPhoneNumber(e.target.value))}
        />
        <button onClick={() => handleClick(phone, name)}>Замовити</button>
      </div>
    </Modal>
  );
};

export default ModalBuyOneClick;
