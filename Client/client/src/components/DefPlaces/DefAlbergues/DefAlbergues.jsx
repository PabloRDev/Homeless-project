import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DefPlaces.scss";

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
      <ul className="places">
        <h1 className="places-title">ALBERGUES:</h1>
        {albergues.map((albergue) => (
          <li
            className="places-list"
            key={albergue.id}
            style={{ backgroundColor: "#3c3c3a11" }}
          >
            <h1 className="places-name">{albergue.name}</h1>
            <h2 className="places-subtitle">
              <span className="description">Dirección:</span> {albergue.address}
            </h2>
            <h2 className="places-subtitle">
              <span className="description">Teléfono:</span> {albergue.phone}
            </h2>
            <h2 className="places-subtitle">
              <span className="description">Horario:</span> {albergue.opening}
            </h2>
            {albergue.services && (
              <h2 className="places-subtitle">
                <span className="description">Servicios:</span>{" "}
                {albergue.services}
              </h2>
            )}
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
          </li>
        ))}
      </ul>
    );
  }
};

export default DefAlbergues;
