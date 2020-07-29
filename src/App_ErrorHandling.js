import React, { Component } from "react";
import classes from "./App.css";
import Person from "./components/Persons/Person/Person";
import ErrorBoundary from './ErrorBoundary/errorBoundary';


class App extends Component {
  state = {
    persons: [
      { id: 'abc123',  name: "Jyothi", age: 30 },
      { id: 'abc124',  name: "Varun", age: 10 },
      { id: 'abc125',  name: "Saravana", age: 30 },
    ],
    otherState: "Some Other Value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return (person.id === id)
    })

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "Varun Sai Saravana", age: 8 },
        { name: "Saravana", age: 35 },
      ],
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);

    this.setState({
      persons: persons
    })
  }

  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                  return (<ErrorBoundary key={person.id}>  
                    <Person click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.nameChangedHandler(event, person.id)}/> 
                </ErrorBoundary>)
                })}
            </div> 
        );

        btnClass = classes.Red;
    }

    let newclass = [];
    if(this.state.persons.length <= 2)
      newclass.push(classes.red)
    
    if(this.state.persons.length <= 1)
      newclass.push(classes.bold)


    return (
          <div className={classes.App}>
            <h1>Welcome to React</h1>
            <p className={newclass.join(' ')}>This is really working!</p>
            <button
              className = {btnClass}
              onClick={this.togglePersonsHandler}>
              Toggle Persons
            </button>
            {persons}
          </div>
    );
  }
}

export default App;
