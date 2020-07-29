import React from './node_modules/react';
import classes from './person.css';


const Person = (props) => {
  const rnd = Math.random();
  if( rnd > 0.7 ){
    throw new Error('Something Went Wrong!');
  }
  
  return (
    <div className={classes.person}>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default Person;