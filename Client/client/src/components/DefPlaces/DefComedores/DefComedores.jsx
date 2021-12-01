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
      <ul className="ul_comedores" >
        <h1>COMEDORES:</h1>
        {comedores.map((comedor) => (
          <li className="li-container-comedores" key={comedor.id}>
            <h1 className="h1-comedores">Nombre: {comedor.name}</h1>
            <h2 className="h2-comedores">Dirección: {comedor.address}</h2>
            <h3 className="h3-comedores">Teléfono: {comedor.phone}</h3>
            <h3 className="h3-comedores">Horario: {comedor.opening}</h3>
            <iframe
              title="Mapa del lugar"
              width="350"
              height="350"
              id="gmap_canvas"
              src={comedor.googleadress + "=embed"}
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <h2 className="h2-comedores">Descripción: {comedor.description}</h2>
            {comedor.info && <h2 className="h2-comedores">Más información: {comedor.info}</h2>}
          </li>
        ))}
      </ul>
    );
  }
};

export default DefComedores;
