import React, { useState } from "react";

const Interactive = ({header, description}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpen = (e) => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        e.target.className = "minuse";
      } else {
        e.target.className = "plus";
      }
  };
  return (
    <div className="firstInteractive">
      <div className="headerInteractive">
        <h5>{header}</h5>
        <div
          className="plus"
          onClick={(e) => handleClickOpen(e)}
        ></div>
      </div>
      {isOpen && (
        <div className="textInteractive">
          <span>{description}</span>
        </div>
      )}
    </div>
  );
};

export default Interactive;
