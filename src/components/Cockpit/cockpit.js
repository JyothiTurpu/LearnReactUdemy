import React, { useEffect, useRef, useContext } from 'react';
import classes from './cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);
  
  useEffect(() => {
    console.log('cockpit.js=>useEffect for toggleButtonRef');
    toggleButtonRef.current.click();
  }, [])

  // componentDidMount & componentDidUpdate in one ReactHook called useEffect and will be called whenever the component is rendered 
  useEffect(() => {
    console.log('cockpit.js useEffect');
    //Send HTTP Request
    // const timer = setTimeout(() => {
      // alert('Saved Data to Cloud!');
    // }, 1000);

    // return () => {
    //   console.log('cockpit useEffect return statement');
    //   clearTimeout(timer);
    // }
  }, []);



  useEffect(() => {
    console.log('cockpit.js 2nd useEffect')
    return () => {
      console.log('cockpit.js 2nd useEffect cleanup work')
    }
  })



  let newclass = [];
  let btnClass = '';

    if(props.showPersons)
      btnClass = classes.Red;

    if(props.personsLength <= 2)
      newclass.push(classes.red)
    
    if(props.personsLength <= 1)
      newclass.push(classes.bold)

  return (
    <div className={classes.cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={newclass.join(' ')}>This is really working!</p>
      <button
        ref = {toggleButtonRef}
        className = {btnClass}
        onClick={props.clickled}>
        Toggle Persons
      </button>

      <button onClick={authContext.login}>Log In</button>

    </div>
  );
}

export default React.memo(Cockpit);