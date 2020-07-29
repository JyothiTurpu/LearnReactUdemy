import React from 'react';
import classes from './person.css';


const Person = (props) => {
  console.log('Person.js render')
  return (
    <div className={classes.person}>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default Person;