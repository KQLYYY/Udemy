import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: "Bob",
        age: 28
      }, {
        name: "John",
        age: 18
      }, {
        name: "Niko",
        age: 20
      }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = () => {
    // console.log("was clicked!");
    this.setState({
      persons: [
      {
        name: "Bob",
        age: 1
      }, {
        name: "John",
        age: 2
      }, {
        name: "Niko",
        age: 3
      }
    ]
  }
)
  }

  render() {
    return (<div className="App">
      <h1>Hi, I'm a React App!</h1>
      <button onClick={this.switchNameHandler}>Switch the name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>);
    // return React.createElement('div', {className: 'Apps'}, React.createElement('h1',null,'Hi, I\'m a React App!'), 'Does this work now?');
  }
}

export default App;
