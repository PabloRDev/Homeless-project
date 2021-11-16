import React from "react";
import "./MenuButton.scss";

const MenuButton = ({ open, handleClick }) => {
  return !open ? (
    <div className="MenuButtonWraper" onClick={handleClick}>
      <img src="././close_ham.png" alt="" />
    </div>
  ) : (
    <div className="MenuButtonWraper" onClick={handleClick}>
      <img src="./open_ham.png" alt="" />
    </div>
  );
};

export default MenuButton;
