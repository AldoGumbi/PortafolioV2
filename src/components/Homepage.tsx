// HomePage.js
import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import '../styles/homepage.css';
import Navbar from './Navbar';
import Presentation from './Presentation';

class HomePage extends Component{
  componentDidMount() {
    ScrollReveal().reveal('.sphere',{
      origin: 'left', // Cambia la dirección de origen según tus preferencias
      distance: '80px', // Cambia la distancia según tus preferencias
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-out', // Función de aceleración
      reset: false, // Permite que la animación se repita al hacer scroll hacia arriba
      delay:500,
      viewFactor: 1,
    });
  }
  render(){
  return (
    <div className="homepage">
      <div className='sphere sphere1'></div>
      <div className='sphere sphere2'></div>
      <Navbar />
      <Presentation />
    </div>
  );
  };
}

export default HomePage;
