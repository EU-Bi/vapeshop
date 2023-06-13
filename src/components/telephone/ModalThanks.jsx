import React from "react";
import { Modal } from "react-bootstrap";

const ModalThanks = (props) => {
  return (
    <Modal {...props} centered >
      <div className="wrapModalTelephone">
        <div className="closeModal" onClick={props.onHide}></div>
        <div className="pictureApr"></div>
        <p>
          Дякуємо, ваш запит прийнято. Протягом найближчого часу наш менеджер
          зв’яжеться з Вами.
        </p>
      </div>
    </Modal>
  );
};

export default ModalThanks;
