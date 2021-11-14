import React from 'react';

const Welcome = (props)=>{

  return(

    <h1 key={props.key}>Hola {props.name}</h1>
    
  )
}

export default Welcome;