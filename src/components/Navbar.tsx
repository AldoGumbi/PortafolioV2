import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import '../styles/navbar.css';
import '../styles/responsives/navbar-re.css';
import ButtonR from './minicomponents/Button';
import Dropdown from './minicomponents/Dropdown';

interface NavbarProps {
  width:number;
}

class Navbar extends Component <NavbarProps>{
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  componentDidMount() {
    ScrollReveal().reveal('.navbar', {
      distance: '0px', // Distancia de desplazamiento
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-out', // Función de aceleración
      reset: true, // Permite que la animación se repita al hacer scroll hacia arriba
      delay: 800,
      viewFactor: 0.1, // Parte del elemento que necesita ser visible para que se inicie la animación
    });

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Opcional: centra el elemento en la vista
      });
    }
  };

  

  buttonsNavbar = () => {
    if (this.state.width <= 549) {
      return (
        <ul className='lista-botones'>
          <li><ButtonR className='button-navbar' buttonName='Proyectos' onClick={() => this.scrollToSection('proyectos')} /></li>
          <li><Dropdown optionsNames={["Certificaciones", "Acerca de mi", "Contacto"]} /></li>
        </ul>
      );
    } else if (this.state.width <= 900) {
      return (
        <ul className='lista-botones'>
          <li><ButtonR className='button-navbar' buttonName='Proyectos' onClick={() => this.scrollToSection('proyectos')} /></li>
          <li><ButtonR className='button-navbar' buttonName='Certificaciones' onClick={() => this.scrollToSection('proyectos')} /></li>
          <li><Dropdown optionsNames={["Acerca de mi", "Contacto"]} /></li>
        </ul>
      );
    } else if (this.state.width >= 900) {
      return (
        <ul className='lista-botones'>
          <li><ButtonR className='button-navbar' buttonName='Proyectos' onClick={() => this.scrollToSection('proyectos')} /></li>
          <li><ButtonR className='button-navbar' buttonName='Certificaciones' onClick={() => this.scrollToSection('certificaciones')} /></li>
          <li><ButtonR className='button-navbar' buttonName='Acerca de mi' onClick={() => this.scrollToSection('acerca-de-mi')} /></li>
          <li><ButtonR className='button-navbar' buttonName='Contacto' onClick={() => this.scrollToSection('contacto')} /></li>
        </ul>
      );
    }
    return null;
  };

  render() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Esto asegura un desplazamiento suave
      });
    };
    return (
      <div className="navbar">
        <h3 onClick={() => scrollToTop()} style={{cursor:'pointer'}}>Inicio</h3>
        {this.buttonsNavbar()}
      </div>
    );
  }
}

export default Navbar;
