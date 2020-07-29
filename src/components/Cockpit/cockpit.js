import React, { useEffect } from 'react';
import classes from './cockpit.css';

const Cockpit = (props) => {

  // componentDidMount & componentDidUpdate in one ReactHook called useEffect and will be called whenever the component is rendered 
  useEffect(() => {
    console.log('cockpit.js useEffect');
    //Send HTTP Request
  });


  let newclass = [];
  let btnClass = '';

    if(props.showPersons)
      btnClass = classes.Red;

    if(props.persons.length <= 2)
      newclass.push(classes.red)
    
    if(props.persons.length <= 1)
      newclass.push(classes.bold)

  return (
    <div className={classes.cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={newclass.join(' ')}>This is really working!</p>
      <button
        className = {btnClass}
        onClick={props.clickled}>
        Toggle Persons
      </button>
    </div>
  );
}

export default Cockpit;