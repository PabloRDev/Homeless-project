import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../App";
import "./Navbar.scss";

const Navbar = ({ open }) => {
  const { user } = useContext(UserContext);
  return (
    <div className={`navbarWrapper ${open ? "opened" : "closed"}`}>
      <>
        <nav className="nav">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          <Link to="/ayuda">
            <button>Ayuda</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
          <Link to="/logout" onClick={() => (window.location.href = "/")}>
            <button>Logout</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/userevents">
            <button>Metido por user</button>
          </Link>
          <Link to="/appgallery">
            <button>Metido por el culo</button>
          </Link>
        </nav>
        {<div>{!user ? null : <p>Hello: {user.name}</p>}</div>}
      </>
    </div>
  );
};

export default Navbar;
