import React from "react";
import "./Navbar.css";

const Navbar = ({ open }) => {
  return (
    <div className={`navbarWrapper ${open ? "opened" : "closed"}`}>
      <ul>
        <li>Home</li>
        <li>Lugares importantes</li>
        <li>Lugares añadidos</li>
        <li>Ayuda</li>
        <li>Info</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
