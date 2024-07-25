import React, { Component } from 'react'
import { BsImage } from "react-icons/bs";
import ButtonR from './Button';
import { PiImageSquareThin } from "react-icons/pi";
import { PiLinkSimpleBreakThin } from "react-icons/pi";
import './styles-mn/certicard.css'
import Labels from './Labels';
interface CertiCardProps {
    titulo:string;
    labels:string[];
    captura:string;
    descripcion:string;
    enlace:string;
}
class CertiCard extends Component<CertiCardProps>{
    
    
    render(){
        const { titulo, labels, captura, descripcion, enlace } = this.props;
        const handleClick = (enlace) => {
            window.open(enlace, '_blank');
          };
    return(
        <div  className="certificate">
            <div className='info-certi'>
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <div className='skills-cards'>
                    {labels.map(label => 
                    label.includes("-") ? 
                        <Labels className={label} buttonName={label.replace("-", " ")}/> : 
                        <Labels className={label} buttonName={label}/> 
                    )}
           </div>
            </div>
            <div className='buttons-certi'>
                <ButtonR className='button-link' onClick={()=>handleClick(enlace)}buttonName={<PiImageSquareThin />} />
                <ButtonR className='button-image' onClick={()=>handleClick(captura)}buttonName={<PiLinkSimpleBreakThin />} />
            </div>
        </div>
    )
    }
}

export default CertiCard