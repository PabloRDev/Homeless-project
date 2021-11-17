import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import MenuButton from "../MenuButton/MenuButton";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="headerWrapper">
      <div className="openedHeader">
        <>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
              <Link to="/Appgallery">
                  Donde acudir
                </Link>
              </li>
              <li>
                <Link to="/Userevents">
                  Comparte
                </Link>
              </li>
            <li>
            <Link to="/Ayuda">
              Recursos
            </Link>
            </li>
            <li>
              <Link to="/About">
                Situación
              </Link>
              </li>
            <li>
              <Link to="/register">
                Register
              </Link>
              </li>
            <li>
              <Link to="/logout" onClick={() => (window.location.href = "/")}>
                Logout
              </Link>
              </li>
            <li>
              <Link to="/login">
                Login
              </Link>
              </li>
              </ul>
          </nav>
          {<div>{!user ? null : <p>Hello: {user.name}</p>}</div>}
        </>
      </div>

      <Navbar open={open} handleClick={handleClick} />
      <MenuButton open={open} handleClick={handleClick} />
    </div>
  );
};

export default Header;
