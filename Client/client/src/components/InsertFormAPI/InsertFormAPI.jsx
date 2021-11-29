import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { userEvents } from "../../api/fetch_events.js";
import { UserContext } from "../../App";
import "../InsertFormAPI/InsertForm.scss";

const INITIAL_STATE = {
  name: "",
  type: "",
  place: "",
  date: "",
  time: "",
};

const InsertFormAPI = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [insertForm, setInsertForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await userEvents(insertForm);
      setInsertForm(INITIAL_STATE);
      setError("");
      navigate("/userevent");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setInsertForm({ ...insertForm, [name]: value });
  };

  return user ? (
    <div className="insertForm">
      <h1>Introduzca su evento:</h1>
      <form onSubmit={submitForm}>
        <label>Nombre</label>
        <input
          name="name"
          value={insertForm.name}
          onChange={handleInput}
          placeholder="Nombre del type"
        />
        <div className="radio">
          <input
            className="radio-concreto"
            type="radio"
            name="type"
            value="Entrega de comida"
            onChange={handleInput}
          />
          <label>Entrega de comida 🍜 </label>

          <input
            className="radio-concreto"
            type="radio"
            name="type"
            value="Refugio cercano"
            onChange={handleInput}
          />
          <label>Refugio cercano 🏡 </label>

          <input
            className="radio-concreto"
            type="radio"
            name="type"
            value="Entrega de ropa"
            onChange={handleInput}
          />
          <label>Entrega de ropa 👕 </label>
        </div>

        <input
          name="place"
          value={insertForm.place}
          onChange={handleInput}
          placeholder="Pon aquí la dirección"
        />
        <label htmlFor="place">Lugar</label>
        <input
          type="date"
          name="date"
          value={insertForm.date}
          onChange={handleInput}
        />
        <label htmlFor="date">Fecha</label>

        <input
          type="time"
          name="time"
          value={insertForm.time}
          onChange={handleInput}
        />
        <label htmlFor="time">Hora</label>

        <button type="submit">Enviar</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  ) : (
    <div style={{ color: "red" }}>
      <p>
        El usuario no existe o los datos son incorrectos, regístrate de nuevo
      </p>
    </div>
  );
};

export default InsertFormAPI;
