import React, {PureComponent} from 'react';
import classes from './App.css'
//import Person from '../components/Persons/Person/Person'
//import Radium,{StyleRoot} from 'radium'
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Costructor',props);
    this.state = {
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
        showPersons: false,
        toggleClicked: 0,
        authenticated: false
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()')
  }

//   shouldComponentUpdate(nextProps,nextState){
//     console.log('[UPDATE App.js] Inside shouldComponentUpdate',nextProps,nextState)
//     return nextState.persons !== this.state.persons || 
//     nextState.showPersons !== this.state.showPersons;
// }

compoentWillUpdate(nextProps,nextState){
  console.log('[UPDATE App.js] Inside ComponentWillUpdate',nextProps,nextState)
}

componentDidUpdate(){
  console.log('[UPDATE App.js] Inside ComponentDidUpdate')
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
    this.setState((prevState,props)=>
    { return {
            showPersons: !doesShow,
            toggleClicked: prevState.toggleClicked + 1
    }
    });
  }

  loginHandler = () => {
    this.setState({authenticated:true})
  }

  render() {
    console.log('[App.js] Inside Render') 
    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />
    }

    return (
    <Aux>
      <button onClick={()=>{this.setState({showPersons:true})}}>Show Persons</button>
      <Cockpit 
        appTitle={this.props.title}
        showPersons={this.state.showPersons} 
        persons={this.state.persons}
        login={this.loginHandler}
        clicked={this.togglePersonsHandler}/>
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </Aux>);
    // return React.createElement('div', {className: 'Apps'}, React.createElement('h1',null,'Hi, I\'m a React App!'), 'Does this work now?');
  }
}
export default withClass(App,classes.App);
