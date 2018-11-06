import React from 'react'
import './Char.css'

const Char1 = (props) =>{
  return(
    <div className='Char' onClick={props.clicked}>
      <p>{props.character}</p>
    </div>
  )
}

export default Char1;
