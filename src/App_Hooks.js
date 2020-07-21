import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
    const [ personsState, setPersonsState ] = useState({
      persons: [
      {name: 'Jyothi', age: 30},
      {name: 'Varun', age: 10},
      {name: 'Saravana', age: 30}
      ]
    })

    const [ otherState, setOthersState ] = useState({otherState: 'Some Other Value'});
    
    console.log(personsState, otherState);

    const switchNameHandler = () => {
      // console.log('Was Clicked!')
      setPersonsState({
        persons: [
          {name: 'Jyothi Turpu', age: 30},
          {name: 'Varun Sai Saravana', age: 8},
          {name: 'Saravana', age: 35}
        ],
        otherState: 'Some Other Value'
      })
    }

    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Names</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies Gaming! </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
}

export default App;



  