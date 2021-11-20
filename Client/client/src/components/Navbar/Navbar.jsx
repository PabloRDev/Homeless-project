import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Navbar.scss";

const Navbar = ({ open, handleClick }) => {
  const { user } = useContext(UserContext);
  return (
    <div className={`navbarWrapper ${open ? "opened" : "closed"}`}>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>
              Situación
            </Link>
          </li>
          <li>
            <Link to="/ayuda" onClick={handleClick}>
              Recursos
            </Link>
          </li>
          <li>
            <Link to="/appgallery" onClick={handleClick}>
              Dónde acudir
            </Link>
          </li>
          <li>
            {user && (
              <Link to="/userevent" onClick={handleClick}>
                Comparte tu evento
              </Link>
            )}
          </li>
          <li>
            {!user && (
              <Link to="/register" onClick={handleClick}>
                Register
              </Link>
            )}
          </li>
          <li>
            {user && (
              <Link to="/logout" onClick={() => (window.location.href = "/")}>
                Logout
              </Link>
            )}
          </li>
          <li>
            {!user && (
              <Link to="/login" onClick={handleClick}>
                Login
              </Link>
            )}
          </li>
          {user && <p>Hello: {user.name}</p>}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
