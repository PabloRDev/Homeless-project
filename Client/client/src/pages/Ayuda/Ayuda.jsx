import React from "react";
import "./Ayuda.scss";

const Ayuda = () => {
  return (
    <div className="helpWrapper">
      <h1>Lugares oficiales de recursos disponibles para personas sin hogar</h1>
      <section>
        <div className="imageWrapper">
          <img src="./homeless.jpg" alt="" />
        </div>
        <div className="textWrapper">
          <h2>Programa de atención</h2>
          <p>
            Actuación institucional que busca dar respuesta a las personas que
            sufren los estados más graves de la exclusión social.
          </p>
          <button>
            <a href="https://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Samur-Social-Personas-sin-hogar/Personas-sin-hogar/Programa-de-atencion/Programa-de-atencion/?vgnextfmt=default&vgnextoid=c83f70c0b6a6b310VgnVCM1000000b205a0aRCRD&vgnextchannel=bd9d9b6bf78b8310VgnVCM2000000c205a0aRCRD">
              Enlace
            </a>
          </button>
        </div>
      </section>
      <section>
        <div className="imageWrapper">
          <img src="./homeless1.jpg" alt="" />
        </div>
        <div className="textWrapper">
          <h2>Samur Social</h2>
          <p>
            Es el Servicio Social de Atención Municipal a las emergencias
            sociales, integrado en la red de respuestas de los servicios de
            emergencias de la ciudad de Madrid.
          </p>
          <button>
            <a href="https://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Samur-Social-Personas-sin-hogar/Samur-Social/?vgnextfmt=default&vgnextchannel=ddf8f471d18b8310VgnVCM2000000c205a0aRCRD">
              Enlace
            </a>
          </button>
        </div>
      </section>
      <section>
        <div className="imageWrapper">
          <img src="homeless3.jpg" alt="" />
        </div>
        <div className="textWrapper">
          <h2>Campaña contra el frio 2021-2022</h2>
          <p>
            Busca dar respuesta a las personas sin hogar y que como consecuencia
            del frio, se produce un incremento considerable de su vulnerabilidad
            personal y física.
          </p>
          <button>
            <a href="https://www.madrid.es/portales/munimadrid/es/Inicio/El-Ayuntamiento/Samur-Social-Personas-sin-hogar/Personas-sin-hogar/Campana-contra-el-frio/Campana-municipal-contra-el-frio-2021-2022/?vgnextfmt=default&vgnextoid=c2bedbb5cf70c710VgnVCM2000001f4a900aRCRD&vgnextchannel=e8619b6bf78b8310VgnVCM2000000c205a0aRCRD">
              Enlace
            </a>
          </button>
        </div>
      </section>
      <section>
        <div className="imageWrapper">
          <img src="./homeless2.jpg" alt="" />
        </div>
        <div className="textWrapper">
          <h2>Recursos y actuaciones</h2>
          <p>Información completa</p>
          <button>
            <a href="https://www.comunidad.madrid/servicios/asuntos-sociales/actuaciones-dirigidas-personas-hogar">
              Enlace
            </a>
          </button>
        </div>
      </section>
      <section>
        <div className="imageWrapper">
          <img src="homeless4.jpg" alt="" />
        </div>
        <div className="textWrapper">
          <h2>Plan de inclusión de personas sin hogar</h2>
          <p>
            Actuación institucional que busca dar respuesta a las personas que
            sufren los estados más graves de la exclusión social.
          </p>
          <button>
            <a href="./pdf.pdf" download>
              Descargar PDF
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Ayuda;
