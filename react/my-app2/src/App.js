import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  usernameChangeHandler = (event) => {
    this.setState({userName : event.target.value})
  }

  state = {
    userName : "Max"
  };
  render() {
    return (
      <div className="App">
        <br/>
        <UserInput changed={this.usernameChangeHandler} currentName={this.state.userName} />
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName="kek"/>
      </div>
    );
  }
}

export default App;
