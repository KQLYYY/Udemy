import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation.js'
import Char1 from './Char1/Char1.js'

class App extends Component {
  state={
    userInput:''
  }

 inputChangedHandler = (event) =>{
   this.setState({userInput:event.target.value})
 }

 deleteCharHandler = (index) =>{
   const text = this.state.userInput.split('');
   text.splice(index,1);
   const updatedtext = text.join('');
   this.setState({userInput:updatedtext});

 }

  render() {
    const charList = this.state.userInput.split('').map((ch,index)=>{
      return <Char1 character={ch} key={index} clicked={()=>this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
