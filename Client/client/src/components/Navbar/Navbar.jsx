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
          <Link to="/register" onClick={handleClick}>
            Register

          </Link>
          <Link to="/logout" onClick={() => (window.location.href = "/")}>
            Logout
          </Link>
          <Link to="/login" onClick={handleClick}>
            Login
          </Link>

          <Link to="/userevents" onClick={handleClick}>
            Comparte
          </Link>
          <Link to="/appgallery" onClick={handleClick}>
            Donde acudir

          </Link>
        </nav>
        {user && <p>Hello: {user.name}</p>}
      </>
    </div>
  );
};

export default Navbar;
