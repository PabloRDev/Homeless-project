import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import { registerSchema } from "../../Validations/FormValidation";

import { registerUser } from "../../../api/fetch_user";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import("./RegisterForm.scss");

const INITIAL_STATE = {
  email: "",
  name: "",
  password: "",
};

const RegisterForm = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    let registerData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    let validRegisterData = await registerSchema.isValid(registerData);

    try {
      await registerUser(registerForm);
      setRegisterForm(INITIAL_STATE);
      setError("");

      validRegisterData
        ? navigate("/login")
        : alert(
            "REGISTRO INCORRECTO: introducir email válido y contraseña de 4 a 15 caracteres"
          );
    } catch (error) {
      setError(error.message);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  return (
    <>
      <div className="register">
        <form onSubmit={submitForm} className="register-form">
          <h1 className="register-title">Registro</h1>
          <input
            className="register-form__name"
            type="text"
            name="name"
            value={registerForm.name}
            onChange={handleInput}
            placeholder="Nombre"
          />
          <input
            className="register-form__email"
            type="text"
            name="email"
            value={registerForm.email}
            onChange={handleInput}
            placeholder="E-mail"
          />
          <input
            className="register-form__password"
            type="password"
            name="password"
            value={registerForm.password}
            onChange={handleInput}
            placeholder="Contraseña"
          />
          <div className="register-form__btn-container">
            <h2 className="btn-title">Enviar</h2>
            <button className="register-form__btn" type="submit">
              <ArrowForwardIcon sx={{ color: "white" }} />
            </button>
          </div>
          {error && (
            <div className="register__error" style={{ color: "red" }}>
              <p className="register__error-msg">
                El usuario no existe o los datos son incorrectos
              </p>
            </div>
          )}
          {user && <p className="logged">¡Ya estás registrado!</p>}
          {!user && (
            <p className="no-user">
              La contraseña debe tener de 4 a 15 caracteres
            </p>
          )}
        </form>
      </div>
      <h2 className="register-footer">Registro</h2>
    </>
  );
};

export default RegisterForm;
