import React from 'react';

const userInput = (props) => {
  const inputStyle={
    border : "2px solid blue"
  }
  return <input
    type="text"
    onChange={props.changed}
    value= {props.currentName}
    style = {inputStyle}
    />
};

export default userInput;
