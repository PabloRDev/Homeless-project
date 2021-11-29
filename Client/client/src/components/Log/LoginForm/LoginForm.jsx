import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/fetch_user";
import { UserContext } from "../../../App";

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

      navigate("/userevent");
      !user && (
        <div style={{ color: "red" }}>
          <p>El usuario no existe o los datos son incorrectos</p>
        </div>
      );
    } catch (error) {
      console.log("Error -> Login", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="email" name="email" placeholder="E-mail" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Enviar</button>
        {error && (
          <div style={{ color: "red" }}>
            <p>El usuario no existe o los datos son incorrectos</p>
          </div>
        )}
      </form>
      {!user ? "No hay usuario registrado" : "¡Ya estás registrado!"}
      {!user && (
        <>
          <p>
            ¿Todavía no estás registrado? Lo necesitarás para agregar eventos.
          </p>
          <a href="/register">¡Regístrate!</a>
        </>
      )}
    </div>
  );
};

export default LoginForm;
