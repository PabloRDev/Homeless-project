import React, { useState } from "react";
import { registerUser } from "../../../api/fetch_user";



const INITIAL_STATE = {
  name: "",
  type: "",
  place: "",
  date: "",
  time: "",
};



const InsertForm = () => {

  const [insertForm, setInsertForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      await registerUser(insertForm);
      setInsertForm(INITIAL_STATE);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInsertForm({ ...insertForm, [name]: value });
  };
  
  
  
  return (
    <div className="insertForm">
      <h1>¿Qué deseas añadir?</h1>
      <form onSubmit={submitForm}>
      <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          value={insertForm.name}
          onChange={handleInput}
          placeholder="Nombre del encuentro"
          required
          />
        <label htmlFor="email">Tipo de encuentro:</label>
        <div className="radio">
          <input
            className="radio-concreto"
            type="radio"
            id="comida"
            name="encuentro"
            value="Entrega de comida"
          />
          <label htmlFor="comida">Entrega de comida</label>

          <input
            className="radio-concreto"
            type="radio"
            id="refugio"
            name="encuentro"
            value="Refugio cercano"
          />
          <label htmlFor="refugio">Refugio cercano</label>

          <input
            className="radio-concreto"
            type="radio"
            id="ropa"
            name="encuentro"
            value="Entrega de ropa"
          />
          <label htmlFor="ropa">Entrega de ropa</label>
        </div>

        <label htmlFor="lugar">Lugar</label>
        <input
          id="lugar"
          name="lugar"
          value={insertForm.place}
          onChange={handleInput}
          placeholder="Pon aquí la dirección"
          required
        />
        <label htmlFor="fecha">Fecha</label>
        <input type="date" id="Fecha" name="Fecha"
        value={insertForm.date}
          onChange={handleInput} required />

        <label htmlFor="hora">Hora</label>
        <input type="time" id="hora" name="hora" value={insertForm.date}
          onChange={handleInput} />

        <button type="submit">Enviar</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

export default InsertForm;
