import React from 'react'
import './styles-mn/labels.css'
import './styles-mn/labels2.css'
const Labels=(props)=>{

    return(
        <button className={props.className}
        onClick={props.onClick} style={props.style}>{props.buttonName}</button>
    )
}

export default Labels