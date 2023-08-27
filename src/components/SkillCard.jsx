import React from 'react'
import './SkillsArray'
import 'bootstrap/dist/css/bootstrap.css'

export default function SkillCard(props) {
     return(
                <div className='col'>
                    <img className='skill-vector' src={props.imgURL} alt={props.alt} />
                    <div className='skill-text'>{props.name}</div>
              </div>
     )
}