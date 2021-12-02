import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

import { userEvents } from "../../api/fetch_events.js";
import { UserContext } from "../../App";
import "../InsertFormAPI/InsertFormAPI.scss";

const INITIAL_STATE = {
  name: "",
  type: "",
  place: "",
  date: "",
  time: "",
};

const InsertFormAPI = () => {
  // const navigate = useNavigate();
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
      // navigate("/eventos");
      window.location.href = "/eventos";
    } catch (error) {
      setError(error.message);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setInsertForm({ ...insertForm, [name]: value });
  };

  return (
    user && (
      <div className="insertForm">
        <h1>Introduzca su evento:</h1>
        <form onSubmit={submitForm}>
          <label>Nombre</label>
          <input
            className="inputButton"
            name="name"
            value={insertForm.name}
            onChange={handleInput}
            placeholder="Nombre del evento"
          />
          <div className="radio">
            <div className="radio-concreto">
              <input
                type="radio"
                name="type"
                value="Entrega de comida"
                onChange={handleInput}
              />

              <label>
                Entrega de comida{" "}
                <img src="./plato.png" alt="Entrega de comida" />
              </label>
            </div>
            <div className="radio-concreto">
              <input
                type="radio"
                name="type"
                value="Refugio cercano"
                onChange={handleInput}
              />

              <label>
                Refugio cercano <img src="./casa_1.png" alt="Refugio cercano" />
              </label>
            </div>
            <div className="radio-concreto">
              <input
                type="radio"
                name="type"
                value="Entrega de ropa"
                onChange={handleInput}
              />
              <label>
                Entrega de ropa{" "}
                <img src="./camiseta.png" alt="Entrega de ropa" />
              </label>
            </div>
          </div>
          <div className="placeForm">
            <div>
              <input
                className="inputButton"
                name="place"
                value={insertForm.place}
                onChange={handleInput}
                placeholder="Pon aquí la dirección"
              />
              <label htmlFor="place">Lugar</label>
            </div>
            <div>
              <input
                className="inputButton"
                type="date"
                name="date"
                value={insertForm.date}
                onChange={handleInput}
              />
              <label htmlFor="date">Fecha</label>
            </div>
            <div>
              <input
                className="inputButton"
                type="time"
                name="time"
                value={insertForm.time}
                onChange={handleInput}
              />
              <label htmlFor="time"> Hora</label>
            </div>
          </div>

          <button type="submit">Enviar</button>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </div>
    )
  );
};

export default InsertFormAPI;
