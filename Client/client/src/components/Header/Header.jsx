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
            <Link to="/">Home</Link>
            <Link to="/about">Situación</Link>
            <Link to="/ayuda">Recursos</Link>
            <Link to="/appgallery">Dónde acudir</Link>
            {user && <Link to="/userevent">Comparte tu evento</Link>}
            {!user && <Link to="/register">Register</Link>}
            {!user && <Link to="/login">Login</Link>}
            {user && (
              <Link to="/logout" onClick={() => (window.location.href = "/")}>
                Logout
              </Link>
            )}
          </nav>
          {user && <p>Hello: {user.name}</p>}
        </>
      </div>

      <Navbar open={open} handleClick={handleClick} />
      <MenuButton open={open} handleClick={handleClick} />
    </div>
  );
};

export default Header;
