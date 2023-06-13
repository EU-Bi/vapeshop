import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./ModalTelephone.scss";
import ModalThanks from "./ModalThanks";
import SendMessageTgCall from "../../functions/SendMessageTgCall";
import convertPhoneNumber from "../../functions/ConvertPhone";

const ModalTelephone = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [number, setNumber] = useState("");

  const hide = () => {
    setModalShow(false);
  };
  const sendMessage = (phone) => {
    SendMessageTgCall({ phone });
    setModalShow(true);
    setNumber("");
  };
  return (
    <Modal {...props} centered>
      <div className="wrapModalTelephone">
        <div className="closeModal" onClick={props.onHide}></div>
        <h3>Хочете, ми вам зателефонуємо?</h3>
        <p>
          Ми можемо зателефонувати Вам для додаткової консультації, якщо ви
          залишите свій номер телефону у формі нижче:
        </p>
        <input
          type="text"
          id="phone"
          name="phone"
          required
          placeholder="Ваш номер телефону"
          value={number}
          maxLength={10}
          onChange={(e) => {
            setNumber(convertPhoneNumber(e.target.value));
          }}
        />
        <button
          onClick={() => {
            sendMessage(number);
          }}
        >
          Зателефонуйте мені
        </button>
        <ModalThanks
          show={modalShow}
          onHide={() => {
            hide();
            props.onHide();
          }}
        />
      </div>
    </Modal>
  );
};

export default ModalTelephone;
