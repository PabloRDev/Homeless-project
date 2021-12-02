import React, { useState, useEffect } from "react";
import axios from "axios";

import "./InsertFormView.scss";

const InsertFormView = () => {
  const ENDPOINT = "http://localhost:3000/userevent";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userFormViews, setUserFormViews] = useState([]);

  useEffect(() => {
    axios(ENDPOINT).then(
      (res) => {
        console.log(res);
        setUserFormViews(res.data.data.userEvent);
        setIsLoaded(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando...</div>;
  } else {
    return (
      <ul className="places" style={{ paddingTop: "100px" }}>
        <p>Para introducir eventos necesitará estar registrado.</p>
        <a href="/acceso">¡Regístrate o accede!</a>
        <h1 className="places-title" style={{ marginTop: "50px" }}>
          Eventos insertados por los usuarios:
        </h1>
        {userFormViews.map((userFormView) => (
          <li
            className="places-list"
            style={{ backgroundColor: "#8bafd91c" }}
            key={userFormView.id}
          >
            <h2 className="places-subtitle">
              <span className="description">Nombre:</span> {userFormView.name}
            </h2>
            <h2 className="places-subtitle">
              <span className="description">Tipo de evento:</span>{" "}
              {userFormView.type}
            </h2>
            <h2 className="places-subtitle">
              {" "}
              <span className="description">Dirección:</span>{" "}
              {userFormView.place}
            </h2>
            <h2 className="places-subtitle">
              {" "}
              <span className="description">Fecha:</span> {userFormView.date}
            </h2>
            <h2 className="places-subtitle">
              {" "}
              <span className="description">Hora:</span> {userFormView.time}
            </h2>
          </li>
        ))}
      </ul>
    );
  }
};

export default InsertFormView;
