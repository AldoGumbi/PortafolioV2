import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';
import "../styles/presentation.css";
import "../styles/responsives/presentation-re.css";
import photoD from '../assets/avatartion.png';
import photoD2 from '../assets/2-foto.png';

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isImageOne: true
    };
  }

  componentDidMount() {
    ScrollReveal().reveal('.text-me', {
      origin: 'left',
      distance: '80px',
      duration: 1000,
      easing: 'ease-out',
      reset: true,
      delay: 500,
      viewFactor: 0.1,
    });

    ScrollReveal().reveal('.photo', {
      origin: 'right',
      distance: '80px',
      duration: 1000,
      easing: 'ease-out',
      reset: true,
      delay: 500,
      viewFactor: 0.1,
    });
  }

  handleImageClick = () => {
    this.setState(prevState => ({ isImageOne: !prevState.isImageOne }));
  }
  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Opcional: centra el elemento en la vista
      });
    }
  };
  render() {
    const { isImageOne } = this.state;

    return (
      <section className='presentation'>
        <div className='text-me'>
          <h2 className='phrase'>"La <strong>creatividad</strong> y la <strong>innovación</strong> en la programación son clave para el avance de la tecnología"</h2>
          <p>– John Maeda</p>
          <p style={{fontSize:'large'}} className='descubre' onClick={()=> this.scrollToSection('proyectos')}>Descrubre un poco de mi trabajo!</p>
        </div>
        <div className='photo'>
          <div className='img-container' onClick={this.handleImageClick}>
            <img
              src={isImageOne ? photoD : photoD2}
              alt="perfil"
              className="img-main"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Presentation;
