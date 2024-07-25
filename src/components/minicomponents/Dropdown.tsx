import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import './styles-mn/dropdown.css'
import 'react-dropdown/style.css';
import { button } from '@nextui-org/react'
const Dropdown=(props)=>{
    
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Opcional: centra el elemento en la vista
      });
      setIsOpen(!isOpen);
    
    }
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
      <TiThMenu style={{ fontSize: '40px'}}/>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {props.optionsNames.map((option)=>
          <p onClick={()=>scrollToSection((option.toLowerCase()).replace(/\s/g,"-"))}>
            {(option)}</p>
        )}
        </div>
      )}
    </div>
  );
}

export default Dropdown
