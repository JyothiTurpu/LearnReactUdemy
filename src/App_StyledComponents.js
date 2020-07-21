import React, { Component } from "react";
import styled from 'styled-components';
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
        background-color: ${props => props.alt ? "red" : 'green'};
        color: white;
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;
        
        &:hover {
          background-color: ${props => props.alt ? "salmon" : 'lightgreen'};
          color: black;
        }
`;

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

// Radium is a package in React which is used to have inline-styles for the HTML Elements inorder to use Psudo selectors like hover
// Radium is used to write media queries which makes our app responsive
  render() {
    const style = {
      backgroundColor: "green",
      color: 'white',
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) => {
                  return (<Person key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />)
                })}
                
                {/* <Person
                  changed={this.nameChangedHandler}
                  click={this.switchNameHandler.bind(this, "Jyothi!")}
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                >
                  {" "}
                  My Hobbies Gaming!{" "}
                </Person> */}
                
            </div> 
        );

        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color: 'black'
        // }
    }

    let classes = [];
    if(this.state.persons.length <= 2)
      classes.push('red')
    
    if(this.state.persons.length <= 1)
      classes.push('bold')


    return (
          <div className="App">
            <h1>Welcome to React</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            {/* <button
              style={style}
              onClick={this.togglePersonsHandler}>
              Toggle Persons
            </button> */}
            <StyledButton onClick={this.togglePersonsHandler} alt={this.state.showPersons}>
              Toggle Persons
            </StyledButton>
            {persons}
          </div>
    );
  }
}

export default App;
