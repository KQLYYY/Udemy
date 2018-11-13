import React, { Component } from 'react'
//import Radium from 'radium';
import classes from './Person.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import {AuthContext} from '../../../containers/App'

export class Person extends Component {
  constructor (props) {
    super (props);
    console.log('[Person.js] Inside Constructor',props );
    this.inputElement = React.createRef();
  }

  componentWillMount(){
    console.log('[Person.js] Inside componentWillMount()')
  }

  componentDidMount(){
    console.log('[Person.js] Inside componentDidMount()')
    //this.focusInput();
  }

  focus() {
      this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] Inside render()')
    return (
      <Aux>
        <AuthContext.Consumer>
        {auth => auth ? <p>I'm authenticated</p>: null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old </p>
        <p>{this.props.children}</p>
        <input 
          ref = {this.inputElement}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}/>
      </Aux>
    )
    // return [
    //   <p key='11' onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old </p>,
    //   <p key='12' >{this.props.children}</p>,
    //   <input key='13'  type="text" onChange={this.props.changed} value={this.props.name}/>
    // ];
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

