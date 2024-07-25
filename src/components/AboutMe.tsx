import React, {Component} from 'react';
import ScrollReveal from 'scrollreveal';
import "../styles/aboutme.css";
import photoA from '../assets/avatartion3.png'

import { PiNotebookFill } from "react-icons/pi";
import { FaFolder,FaReact,FaPhp,FaGitAlt } from "react-icons/fa";
import { IoMdWatch, IoLogoJavascript} from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { TbBrandMysql,TbBrandHtml5,TbBrandCss3 } from "react-icons/tb";
import { RiJavaLine } from "react-icons/ri";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaStopwatch } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { BiSolidPencil } from "react-icons/bi";
import { FaHandshakeAngle } from "react-icons/fa6";
import { BsWatch } from "react-icons/bs";
import { FaHammer } from "react-icons/fa6";


class AboutMe extends Component{
    componentDidMount() {
        ScrollReveal().reveal('.describe-me', {
          origin: 'bottom', // Cambia la dirección de origen según tus preferencias
          distance: '200px', // Cambia la distancia según tus preferencias
          duration: 1000, // Duración de la animación en milisegundos
          easing: 'ease-out', // Función de aceleración
          reset: false, // Permite que la animación se repita al hacer scroll hacia arriba
          delay:500,
          viewFactor: 0.01,
        });
    
        ScrollReveal().reveal('.skills', {
          origin: 'top', // Cambia la dirección de origen según tus preferencias
          distance: '200px', // Cambia la distancia según tus preferencias
          duration: 1000, // Duración de la animación en milisegundos
          easing: 'ease-out', // Función de aceleración
          reset: false, // Permite que la animación se repita al hacer scroll hacia arriba
          delay:500,
          viewFactor: 0.01,
        });
      }
    
      render() {
    return( 
        <section className='aboutme'id="acerca-de-mi">
            <h2 className='tituloSeccion'>Acerca de mi</h2>
            <div className='describe-me' >
                <div className='describe-image'>
                    <img src={photoA}  alt="perfil" />
                </div>
                <div className='describe-text'>
                  <h2>Este soy yo, <strong>Aldo Alex</strong></h2>
                  <p>Egresado del bachillerato como <strong>Tecnólogo Profesional en Informática</strong> y actual estudiante de la licenciatura en <strong>Ingeniería en Computación</strong>, he emprendido un camino de crecimiento y aprendizaje continuo en el mundo del <strong>Desarrollo Web</strong> y la <strong>Innovación de Nuevas Tecnologías.</strong>
                  <br></br>Me encanta la <strong>resolución de problemas complejos</strong> en el mundo del desarrollo tecnológico y los grandes avances que conllevan estos <strong>resultados</strong>.</p>

                </div>
            </div>
            <div className='skills'>
                <div className='soft-skills'>
                    <h2>Soft Skills</h2>
                    <div className="tabla-soft">
                        <div className="soft-box">
                              <p className='iconSkill' style={{backgroundColor:'#24A24C'}}><FaStopwatch color='#CCC' size={15}/></p>
                              <p className='textSkill'>Puntual</p>
                        </div>
                        <div className="soft-box">
                              <p className='iconSkill'  style={{backgroundColor:'#2D49D5'}}><FaBookOpen color='#CCC' size={15}/></p>
                              <p className='textSkill'>Organizado</p>
                        </div>
                        <div className="soft-box">
                              <p className='iconSkill' style={{backgroundColor:'#D52D5D'}}><BiSolidPencil color='#CCC' size={15}/></p>
                              <p className='textSkill'>Autodidacta</p>
                        </div>
                        <div className="soft-box">
                              <p className='iconSkill' style={{backgroundColor:'#984571'}}><FaHandshakeAngle color='#CCC' size={15}/></p>
                              <p className='textSkill'>Responsable</p>
                        </div>
                        <div className="soft-box">
                              <p className='iconSkill' style={{backgroundColor:'#6D2DD5'}}><BsWatch color='#CCC' size={15}/></p>
                              <p className='textSkill'>Paciente</p>
                        </div>
                        <div className="soft-box">
                              <p className='iconSkill' style={{backgroundColor:'#D59D2D'}}><FaHammer color='#CCC' size={15}/></p>
                              <p className='textSkill'>Comprometido</p>
                        </div>
                    </div>
                </div>
                <div className='tech-skills'>

                      <h2>Programming Skills</h2>
                      <div className="tabla-iconos">
                          <div className="programming-box">
                                <SiCplusplus color='#CCC' size={30}/></div>
                          <div className="programming-box">
                                <IoLogoJavascript color='#CCC' size={30}/></div>
                          <div className="programming-box">
                                <FaReact color='#CCC' size={30}/></div>
                          <div className="programming-box">
                                <FaGitAlt color='#CCC' size={30}/></div>
                          <div className="programming-box">
                                <TbBrandHtml5 color='#CCC' size={30}/></div>
                          <div className="programming-box">
                                <TbBrandCss3 color='#CCC' size={30}/></div>
                          <div className="programming-box">
                                <TbBrandMysql color='white' size={30}/></div>
                          <div className="programming-box">
                                <FaPhp color='#CCC' size={30}/></div>
                          <div className="programming-box">
                                <RiJavaLine color='#CCC' size={30}/></div>
                          <div className="programming-box">
                                <BiLogoSpringBoot color='#CCC' size={30}/></div>
                      </div>



                </div>
            </div>
        </section>
    )
}
}

export default AboutMe