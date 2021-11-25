import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/fetch_user";
import { UserContext } from "../../../App";

const LoginForm = () => {
  const navigate = useNavigate();
  const { user, saveUser } = useContext(UserContext);
  const [error, setError] = useState("");

  const submitForm = async (ev) => {
    ev.preventDefault();
    setError("");

    try {
      const { email, password } = ev.target;
      const form = {
        email: email.value,
        password: password.value,
      };

      const userdb = await loginUser(form);
      console.log("USERLOGINUSER", userdb.data.user);
      saveUser(userdb.data.user);
      navigate("/");
    } catch (error) {
      console.log("Error -> Login", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="email" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <p>{!user && "No hay usuario logueado"}</p>
      <p>¿Todavía no estás registrado? Lo necesitarás para agregar eventos.</p>
      <a href="/register">¡Regístrate!</a>
    </div>
  );
};

export default LoginForm;
