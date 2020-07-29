import React, { Component } from 'react';
import classes from './person.css';


class Person extends Component {

  render() {
    console.log('Person.js render')
    return (
      <div className={classes.person}>
          <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }

}

export default Person;