import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated)
  }

  render() {
    console.log('Person.js render')
   
    return (
      // <div className={classes.person}>
          <Auxiliary>
            
            {(this.context.authenticated) ? <p> Authenticated </p> : <p> Please LogIn! </p>}

            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input 
            // ref={(inputEl) => {this.inputElement = inputEl}} 
            ref={this.inputElementRef}
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}/>
          </Auxiliary>
      // </div>
    );
  }

}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default WithClass(Person, classes.person);