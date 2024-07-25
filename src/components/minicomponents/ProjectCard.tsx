import React, { Component } from 'react'
import ScrollReveal from 'scrollreveal';
import { BsImage } from "react-icons/bs";
import './styles-mn/project-card.css'
import proyectosDatos from '../../projectsInfo/mis-projectos.json';
import Labels from './Labels';
import ButtonR from './Button';
import { FaGithubAlt } from "react-icons/fa6";

interface ProjectCardProps {
  titulo: string;
  imagen: string;
  labels: string[]; // Tipo correcto para labels
  descripcion: string;
  links: string;
  enlaceGithub: string;
}
class ProjectCard extends Component<ProjectCardProps>{

    componentDidMount() {
        ScrollReveal().reveal('.project', {
          distance: '0px', // Distancia de desplazamiento
          duration: 800, // Duración de la animación en milisegundos
          easing: 'ease-out', // Función de aceleración
          reset: true, // Permite que la animación se repita al hacer scroll hacia arriba
          delay: 400,
          viewFactor: 0.4, // Parte del elemento que necesita ser visible para que se inicie la animación
        }
      );
    }
    
    render(){
    const { titulo, imagen, labels, descripcion, links, enlaceGithub } = this.props;
    const handleClick = (enlace) => {
      window.open(enlace, '_blank');
    };
    return(
        <div  className="project">
           <div className='img-project' 
           style={{ backgroundImage: `url(${imagen})`,
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                     }}>
            <p className='tittle'>{titulo}</p>
            <a className='galery' href={imagen} target="_blank" rel="noopener noreferrer"><BsImage /></a>
           </div>
           <div className='lenguages-cards'>
           {labels.map(label => (
            <Labels className={label} buttonName={label}/>
            ))}
           </div>
           <div className='description'>
            <p dangerouslySetInnerHTML={{ __html: descripcion }}></p></div>
           <div className='buttons'>

              {titulo!="RESTful API-SpringBoot" ? 
                  <ButtonR className='linkProject' buttonName='Abrir Proyecto' 
                            onClick={()=>handleClick(links)}/> : null}
              {titulo!="Control Acceso CUCEI" ?  
                  <ButtonR className='gitProject' buttonName={<FaGithubAlt />}
                            onClick={()=>handleClick(enlaceGithub)} /> : null}
             
           </div>
        </div>
    )
    }
}

export default ProjectCard

