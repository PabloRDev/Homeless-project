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
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appgallery">Dónde acudir</Link>
            </li>
            <li>{user && <Link to="/userevents">Comparte tu evento</Link>}</li>
            <li>
              <Link to="/ayuda">Recursos</Link>
            </li>
            <li>
              <Link to="/about">Situación</Link>
            </li>
            <li>{!user && <Link to="/register">Register</Link>}</li>
            <li>{!user && <Link to="/login">Login</Link>}</li>
            <li>
              {user && (
                <Link to="/logout" onClick={() => (window.location.href = "/")}>
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </nav>
        {user && <p>Hello: {user.name}</p>}

        <Navbar open={open} handleClick={handleClick} />
        <MenuButton open={open} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Header;
