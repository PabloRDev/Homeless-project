import React from "react";
import "./InsertForm.scss";

const InsertForm = () => {
  return (
    <div className="insertForm">
      <h1>¿Qué deseas añadir?</h1>
      <form>
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
          placeholder="Pon aquí la dirección"
          required
        />
        <label htmlFor="fecha">Fecha</label>
        <input type="date" id="Fecha" name="Fecha" required />

        <label htmlFor="hora">Hora</label>
        <input type="time" id="hora" name="hora" />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default InsertForm;
