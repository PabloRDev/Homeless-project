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
          <Link to="/">
            <button onClick={handleClick}>Home</button>
          </Link>
          <Link to="/about">
            <button onClick={handleClick}>Situación</button>
          </Link>
          <Link to="/ayuda">
            <button onClick={handleClick}>Recursos</button>
          </Link>
          <Link to="/register">
            <button onClick={handleClick}>Register</button>
          </Link>
          <Link to="/logout" onClick={() => (window.location.href = "/")}>
            <button>Logout</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/userevents">
            <button onClick={handleClick}>Comparte</button>
          </Link>
          <Link to="/appgallery">
            <button onClick={handleClick}>Donde acudir</button>
          </Link>
        </nav>
        {<div>{!user ? null : <p>Hello: {user.name}</p>}</div>}
      </>
    </div>
  );
};

export default Navbar;
