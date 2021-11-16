import React, { useState, useContext } from "react";
import { loginUser } from "../../../api/fetch_user";
import { UserContext } from "../LoginRouter/LoginRouter";

const LoginForm = () => {
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
      <p>{!user ? "No hay usuario logueado" : user.name}</p>
    </div>
  );
};

export default LoginForm;
