import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'
//import Radium,{StyleRoot} from 'radium'

class App extends Component {
  state = {
    persons: [
      {
        id: "1",
        name: "Bob",
        age: 28
      }, {
        id: "2",
        name: "John",
        age: 18
      }, {
        id: "3",
        name: "Niko",
        age: 20
      }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              changed={(event)=>this.nameChangedHandler(event,person.id )}
              click={() => this.deletePersonHandler(index)}
              key={person.id}/>
        })}
      </div>);
      style.backgroundColor='red';
    }

    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }

    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    //console.log(classes,this.state.persons.length)

    return (<div className="App">
      <h1>Hi, I'm a React App!</h1>
      <p className={classes.join(' ')}>This is realy working!</p>
      <button style={style} onClick={() => this.togglePersonsHandler()}>Switch the name</button>
      {persons}
    </div>);
    // return React.createElement('div', {className: 'Apps'}, React.createElement('h1',null,'Hi, I\'m a React App!'), 'Does this work now?');
  }
}

export default App;
