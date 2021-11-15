import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DefAlbergues.scss";

const DefAlbergues = () => {
  const ENDPOINT = "http://localhost:3000/albergues";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [albergues, setAlbergues] = useState([]);

  useEffect(() => {
    axios(ENDPOINT).then(
      (res) => {
        console.log(res);
        setAlbergues(res.data.data.albergue);
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
        <h1>ALBERGUES:</h1>
        {albergues.map((albergue) => (
          <li key={albergue.id}>
            <h1>Nombre: {albergue.name}</h1>
            <h1>Dirección: {albergue.address}</h1>
            <h1>Teléfono: {albergue.phone}</h1>
            <h1>Horario: {albergue.opening}</h1>
            <h1>Servicios: {albergue.services}</h1>
          </li>
        ))}
      </ul>
    );
  }
};

export default DefAlbergues;
