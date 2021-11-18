import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <ul>
        <h1>UserPlaces:</h1>
        {userFormViews.map((userFormView) => (
          <li key={userFormView.id}>
            <h1>Nombre: {userFormView.name}</h1>
            <h1>Tipo de evento: {userFormView.type}</h1>
            <h1>Teléfono: {userFormView.place}</h1>
            <h1>Fecha: {userFormView.date}</h1>
            <h1>Hora: {userFormView.time}</h1>
          </li>
        ))}
      </ul>
    );
  }
};

export default InsertFormView;
