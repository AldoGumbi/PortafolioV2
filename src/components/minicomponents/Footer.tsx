import React, {Component} from 'react';
import ScrollReveal from 'scrollreveal';
import "./styles-mn/footer.css";
import photoA from '../assets/avatartion3.png'
import { SiGmail } from 'react-icons/si';
import { FaCopy, FaGithubAlt } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { RiContactsLine } from "react-icons/ri";

class Footer extends Component{
    componentDidMount() {
        ScrollReveal().reveal('.describe-me', {
          origin: 'bottom', // Cambia la dirección de origen según tus preferencias
          distance: '200px', // Cambia la distancia según tus preferencias
          duration: 1000, // Duración de la animación en milisegundos
          easing: 'ease-out', // Función de aceleración
          reset: true, // Permite que la animación se repita al hacer scroll hacia arriba
          delay:500,
          viewFactor: 0.1,
        });
    
        ScrollReveal().reveal('.skills', {
          origin: 'top', // Cambia la dirección de origen según tus preferencias
          distance: '200px', // Cambia la distancia según tus preferencias
          duration: 1000, // Duración de la animación en milisegundos
          easing: 'ease-out', // Función de aceleración
          reset: true, // Permite que la animación se repita al hacer scroll hacia arriba
          delay:500,
          viewFactor: 0.1,
        });
      }
    
      render() {
    
        const handleScrollToBottom = () => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'  // Hace el desplazamiento suave
          });
        }
    


    return( 
        <footer className='footer' id='contacto'>
            <div className='contact'>
              <RiContactsLine className='contact-icon'/>
            </div>
            <div className='links'>
            <div className="correos">
                
                <ol className='lista-datos'>

                    <div className="google">
                        <button className='icon'>
                           <SiGmail 
                           color='whitesmoke'
                           size={30}
                           style={{cursor:'pointer'}}
                           onClick={()=>window.open(`https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=
                           alexaldo517@gmail.com`,'_blank')}/>
                        </button>
                        <span className='text'>alexaldo417@gmail.com</span>
                        <button className='copy' id='boton-copiar'>
                            <FaCopy 
                            color="#777"  // Cambia el color del icono
                            size={30}        // Cambia el tamaño del icono
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigator.clipboard.writeText("alexaldo417@gmail.com")}/>
                        </button>
                    </div>

                    <div className="linkedin">
                        <button className='icon'>
                            <IoLogoLinkedin 
                            color='whitesmoke'
                            size={30}
                            style={{cursor: 'pointer'}}
                            onClick={()=>window.open(`https://www.linkedin.com/in/aldo-alejandro-valdez-gonzález-7669a82a6
                            `,'_blank')}/>
                        </button>
                        <span className='text'>www.linkedin.com/in/aldo-alejandro-valdez-gonzález-7669a82a6</span>
                        <button className='copy' id='boton-copiar'>
                            <FaCopy 
                            color="#777"  // Cambia el color del icono
                            size={30}        // Cambia el tamaño del icono
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigator.clipboard.writeText("www.linkedin.com/in/aldo-alejandro-valdez-gonzález-7669a82a6")}/>
                        </button>
                    </div>

                    <div className="github">
                        <button className='icon'>
                            <FaGithubAlt 
                            color='whitesmoke'
                            size={30}
                            style={{cursor:'pointer'}}
                            onClick={()=>window.open(`https://github.com/AldoGumbi`,'_blank')}/>
                         
                        </button>
                        <span className='text'>https://github.com/AldoGumbi</span>
                        <button className='copy' id='boton-copiar'>
                            <FaCopy 
                            color="#777"  // Cambia el color del icono
                            size={30}        // Cambia el tamaño del icono
                            style={{ cursor: 'pointer' }}
                            onClick={() => navigator.clipboard.writeText("https://github.com/AldoGumbi")}/>
                        </button>
                    </div>
                </ol>
            </div>
            </div>
        </footer>
    )
}
}

export default Footer