import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DefPlaces.scss";

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
      <ul className="places">
        <h1 className="places-title">COMEDORES:</h1>
        {comedores.map((comedor) => (
          <li
            className="places-list"
            key={comedor.id}
            // style={{ backgroundColor: "#8BB0D9" }}
            style={{ backgroundColor: "#8bafd91c" }}
          >
            <h1 className="places-name">{comedor.name}</h1>
            <h2 className="places-subtitle">
              <span className="description">Dirección:</span> {comedor.address}
            </h2>
            <h2 className="places-subtitle">
              <span className="description">Teléfono:</span> {comedor.phone}
            </h2>
            <h2 className="places-subtitle">
              <span className="description">Horario:</span> {comedor.opening}
            </h2>
            <h2 className="places-subtitle">
              <span className="description">Descripción:</span>{" "}
              {comedor.description}
            </h2>
            {comedor.info && (
              <h2 className="places-subtitle">
                <span className="description">Más información:</span>{" "}
                {comedor.info}
              </h2>
            )}
            <iframe
              title="Situación del comedor"
              width="350"
              height="350"
              id="gmap_canvas"
              src={comedor.googleadress + "=embed"}
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

export default DefComedores;
