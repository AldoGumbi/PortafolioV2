import React, { useState, Component } from 'react';
import '../styles/certificate.css';
import ScrollReveal from 'scrollreveal';
import '../styles/responsives/certificados-re.css';
import CertiCard from './minicomponents/CertiCard'
import certificadosDatos from '../projectsInfo/mis-certis.json';

class Certificates extends Component {
  componentDidMount() {
    ScrollReveal().reveal('.certificates', {
      origin: 'bottom', // Cambia la dirección de origen según tus preferencias
      distance: '20px', // Distancia de desplazamiento
      duration: 400, // Duración de la animación en milisegundos
      easing: 'ease-out', // Función de aceleración
      reset: false, // Permite que la animación se repita al hacer scroll hacia arriba
      delay: 400,
      viewFactor: 0.01, // Parte del elemento que necesita ser visible para que se inicie la animación
    }
  );
  ScrollReveal().reveal('.carrousel-certificates', {
    origin: 'bottom', // Cambia la dirección de origen según tus preferencias
    distance: '550px', // Distancia de desplazamiento
    duration: 400, // Duración de la animación en milisegundos
    easing: 'ease-out', // Función de aceleración
    reset: false, // Permite que la animación se repita al hacer scroll hacia arriba
    delay: 400,
    viewFactor: 0.01, // Parte del elemento que necesita ser visible para que se inicie la animación
  }
);
}
  render(){
    const certificados = Object.entries(certificadosDatos);
  return (
    <>
      <section className='certificates' id='certificaciones'>
        <div className='certificates-container' >
          <h2 className='tituloSeccion'>Principales Certificados</h2>
          <div className='carrousel-certificates'>
          {certificados.map(([key, certificado]) => (
              <CertiCard
                titulo={certificado.titulo}
                labels={certificado.etiquetas}
                captura={certificado.enlace}
                descripcion={certificado.descripcion}
                enlace={certificado.urlImg}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
};

export default Certificates;
