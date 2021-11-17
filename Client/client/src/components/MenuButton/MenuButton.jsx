import React from "react";
import "./MenuButton.scss";

const MenuButton = ({ open, handleClick }) => {
  return (
    <div className="MenuButtonWraper" onClick={handleClick}>
      <img src={open ? "./open_ham.png" : "./close_ham.png"} alt="" />
    </div>
  )
};

export default MenuButton;
