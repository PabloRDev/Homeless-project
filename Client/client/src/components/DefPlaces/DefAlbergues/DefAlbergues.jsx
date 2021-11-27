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
          <li className="li-container-albergues" key={albergue.id}>
            <h1>Nombre: {albergue.name}</h1>
            <h2>Dirección: {albergue.address}</h2>
            <h3>Teléfono: {albergue.phone}</h3>
            <h3>Horario: {albergue.opening}</h3>
            <iframe
              title="Situación del albergue"
              width="350"
              height="350"
              id="gmap_canvas"
              src={albergue.googleadress + "=embed"}
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            ;{albergue.services && <h1>Servicios: {albergue.services}</h1>}
          </li>
        ))}
      </ul>
    );
  }
};

export default DefAlbergues;
