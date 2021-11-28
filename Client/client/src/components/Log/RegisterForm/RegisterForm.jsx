import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import { registerSchema } from "../../Validations/FormValidation";

import { registerUser } from "../../../api/fetch_user";

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
    <div>
      <form onSubmit={submitForm} className="registerForm">
        <input
          type="text"
          name="name"
          value={registerForm.name}
          onChange={handleInput}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="email"
          value={registerForm.email}
          onChange={handleInput}
          placeholder="E-mail"
        />
        <input
          type="password"
          name="password"
          value={registerForm.password}
          onChange={handleInput}
          placeholder="Contraseña"
        />
        <button type="submit">Enviar</button>
        {user && "¡Ya estás registrado!"}
      </form>
      <p>La contraseña debe tener de 4 a 15 caracteres</p>
    </div>
  );
};

export default RegisterForm;
