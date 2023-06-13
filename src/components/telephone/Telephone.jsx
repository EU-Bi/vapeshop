import React, { useState } from "react";
import ModalTelephone from "./ModalTelephone";

const Telephone = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="telephoneWrap">
      <div className="telegram"></div>
      <div className="telephone" onClick={() => setModalShow(true)}></div>
      <ModalTelephone show={modalShow} onHide={() => setModalShow(false)}/> 
    </div>
  );
};

export default Telephone;
