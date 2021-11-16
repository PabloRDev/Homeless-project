import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import MenuButton from "../MenuButton/MenuButton";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="headerWrapper">
      <div className="openedHeader">
        <ul>
          <li>Home</li>
          <li>Lugares importantes</li>
          <li>Lugares añadidos</li>
          <li>Ayuda</li>
          <li>Info</li>
          <li>Login</li>
        </ul>
      </div>
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </div>
  );
};

export default Header;
