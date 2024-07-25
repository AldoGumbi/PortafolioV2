import React from 'react'
import './styles-mn/button.css'
const Button=(props)=>{

    return(
        <button className={props.className} 
        onClick={props.onClick} style={props.style}>{props.buttonName}
        </button>
    )
}

export default Button