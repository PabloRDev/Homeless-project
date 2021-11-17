import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../App";
import "./Navbar.scss";

const Navbar = ({ open, handleClick }) => {
  <button onClick={handleClick}>Home</button>

  const { user } = useContext(UserContext);
  return (
    <div className={`navbarWrapper ${open ? "opened" : "closed"}`}>
      <>
        <nav className="nav">
          <Link to="/">
            <div onClick={handleClick}>Home</div>
          </Link>
          <Link to="/appgallery">
            <div onClick={handleClick}>Donde acudir</div>
          </Link>
          <Link to="/userevents">
            <div onClick={handleClick}>Comparte</div>
          </Link>
          <Link to="/ayuda">
            <div onClick={handleClick}>Recursos</div>
          </Link>
          <Link to="/about">
            <div onClick={handleClick}>Situación</div>
          </Link>
          <Link to="/register">
            <div onClick={handleClick}>Register</div>
          </Link>
          <Link to="/logout" onClick={() => (window.location.href = "/")}>
            <div>Logout</div>
          </Link>
          <Link to="/login">
            <div>Login</div>
          </Link>
         
          
        </nav>
        {<div>{!user ? null : <p>Hello: {user.name}</p>}</div>}
      </>
    </div>
  );
};

export default Navbar;
