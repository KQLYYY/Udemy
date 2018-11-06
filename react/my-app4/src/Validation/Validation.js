import React from 'react';


const Validation = (props) =>{
  console.log(props);
  return(
    <div>
      {
        props.inputLength < 5 ?
          <p>Text too short!</p> :
            <p>Text enough long!</p>
      }
    </div>
  )
};

export default Validation;
