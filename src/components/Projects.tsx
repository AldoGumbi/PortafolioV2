import React, { Component, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import '../styles/projects.css';
import ProjectCard from './minicomponents/ProjectCard';
import proyectosDatos from '../projectsInfo/mis-projectos.json';

class Projects extends Component {
  
  componentDidMount() {
    ScrollReveal().reveal('.projects', {
      origin: 'center', // Cambia la dirección de origen según tus preferencias
      distance: '0px', // Distancia de desplazamiento
      duration: 400, // Duración de la animación en milisegundos
      easing: 'ease-out', // Función de aceleración
      reset: false, // Permite que la animación se repita al hacer scroll hacia arriba
      delay: 400,
      viewFactor: 0.01, // Parte del elemento que necesita ser visible para que se inicie la animación
    }
  );
  ScrollReveal().reveal('.carrousel-projects', {
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
  return (
    <>
      <section className='projects' >
        <div className='projects-container' id='proyectos'>
          <h2 className='tituloSeccion'>Principales proyectos</h2>
          <div className='carrousel-projects'>
          {proyectosDatos.proyecto.map(project => (
              <ProjectCard
                key={project['id']}
                titulo={project.titulo}
                labels={project.etiquetas}
                subtitulo={project.subtitulo}
                imagen={project.imagenes[0]}
                links={project.links}
                descripcion={project.descripcion}
                enlaceGithub={project.enlaceGithub}
              />
            ))}
          
          </div>
        </div>
      </section>
      <div className="backblur"></div>
    </>
  )
}
};

export default Projects;
