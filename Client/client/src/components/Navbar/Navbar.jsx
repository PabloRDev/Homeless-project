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
          {!user && (
            <Link to="/register">
              <button>Register</button>
            </Link>
          )}
          {user && (
            <Link to="/logout" onClick={() => (window.location.href = "/")}>
              <button>Logout</button>
            </Link>
          )}
          {!user && (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
          {user && (
            <Link to="/userevents">
              <button>Introducir evento</button>
            </Link>
          )}
          <Link to="/appgallery">
            <button>Albergues y Comedores</button>
          </Link>
        </nav>
        {user && <p>Hello: {user.name}</p>}
      </>
    </div>
  );
};

export default Navbar;
