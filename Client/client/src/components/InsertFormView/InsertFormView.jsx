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
      <ul className="list">
        <h1 className="userplaces">Eventos insertados por el Usuario:</h1>
        {userFormViews.map((userFormView) => (
          <li className="userlist" key={userFormView.id}>
            <h1>Nombre: {userFormView.name}</h1>
            <h2>Tipo de evento: {userFormView.type}</h2>
            <h3>Teléfono: {userFormView.place}</h3>
            <h3>Fecha: {userFormView.date}</h3>
            <h3>Hora: {userFormView.time}</h3>
          </li>
        ))}
      </ul>
    );
  }
};

export default InsertFormView;
