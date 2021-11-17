import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../App";
import "./Navbar.scss";

const Navbar = ({ open, handleClick }) => {
  const { user } = useContext(UserContext);
  return (
    <div className={`navbarWrapper ${open ? "opened" : "closed"}`}>
      <>
        <nav className="nav">
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
          <Link to="/about" onClick={handleClick}>
            Situación
          </Link>
          <Link to="/ayuda" onClick={handleClick}>
            Recursos
          </Link>
          <Link to="/appgallery" onClick={handleClick}>
            Dónde acudir
          </Link>
          {user && (
            <Link to="/userevents" onClick={handleClick}>
              Comparte tu evento
            </Link>
          )}
          {!user && (
            <Link to="/register" onClick={handleClick}>
              Register
            </Link>
          )}
          {user && (
            <Link to="/logout" onClick={() => (window.location.href = "/")}>
              Logout
            </Link>
          )}
          {!user && (
            <Link to="/login" onClick={handleClick}>
              Login
            </Link>
          )}
        </nav>
        {user && <p>Hello: {user.name}</p>}
      </>
    </div>
  );
};

export default Navbar;
