import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../../api/fetch_user";
import { UserContext } from "../../../App";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import("./LoginForm.scss");

const LoginForm = () => {
  const navigate = useNavigate();

  const { user, saveUser } = useContext(UserContext);
  const [error, setError] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { email, password } = e.target;
      const form = {
        email: email.value,
        password: password.value,
      };

      const userdb = await loginUser(form);
      console.log("DATA LOGIN USER", userdb.data);

      saveUser(userdb.data.user);

      navigate("/eventos");
      !user && (
        <div style={{ color: "red" }}>
          <p>El usuario no existe o los datos son incorrectos</p>
        </div>
      );
    } catch (error) {
      setError(error.message);
      console.log("Error -> Login", error);
    }
  };

  return (
    <>
      <div className="login">
        <form className="login-form" onSubmit={submitForm}>
          <h1 className="login-title">Acceder</h1>
          <input
            className="login-form__email"
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <input
            className="login-form__password"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <div className="login-form__btn-container">
            <h2 className="btn-title">Enviar</h2>
            <button className="login-form__btn" type="submit">
              <ArrowForwardIcon sx={{ color: "white" }} />
            </button>
          </div>
          {error && (
            <div className="login__error" style={{ color: "red" }}>
              <p className="login__error-msg">
                El usuario no existe o los datos son incorrectos
              </p>
            </div>
          )}
          {!user ? (
            <p className="no-user">No hay usuario registrado</p>
          ) : (
            <>
              <p className="logged">¡Ya estás registrado!</p> <br />
              <a href="/logout">¿Salir?</a>
            </>
          )}
          {!user && (
            <>
              <p className="no-user-yet">
                ¿Todavía no estás registrado? Lo necesitarás para agregar
                eventos.
              </p>
              <a className="register-link" href="/registro">
                ¡Regístrate!
              </a>
            </>
          )}
        </form>
      </div>
      <h2 className="log-footer">Acceso</h2>
    </>
  );
};

export default LoginForm;
