import React, { useState } from "react";
import ModalTelephone from "./ModalTelephone";

const Telephone = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="telephoneWrap">
      <a href="https://t.me/Manager_Vape_anad_Pods" className="telegram" />
      <div className="telephone" onClick={() => setModalShow(true)}></div>
      <ModalTelephone show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Telephone;
