import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DefComedores.scss";

const DefComedores = () => {
  const ENDPOINT = "http://localhost:3000/comedores";
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [comedores, setComedores] = useState([]);

  useEffect(() => {
    axios(ENDPOINT).then(
      (res) => {
        console.log(res);
        setComedores(res.data.data.comedor);
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
        <h1>COMEDORES:</h1>
        {comedores.map((comedor) => (
          <li key={comedor.id}>
            <h1>Nombre: {comedor.name}</h1>
            <h1>Dirección: {comedor.address}</h1>
            <h1>Teléfono: {comedor.phone}</h1>
            <h1>Horario: {comedor.opening}</h1>
            <h1>Descripción: {comedor.description}</h1>
            {comedor.info && <h1>Más información: {comedor.info}</h1>}
          </li>
        ))}
      </ul>
    );
  }
};

export default DefComedores;
