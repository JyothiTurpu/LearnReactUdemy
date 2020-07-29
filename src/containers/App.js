import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/persons";
import Cockpit from '../components/Cockpit/cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js Constructor');
    
  }

  state = {
    persons: [
      { id: 'abc123',  name: "Jyothi", age: 30 },
      { id: 'abc124',  name: "Varun", age: 10 },
      { id: 'abc125',  name: "Saravana", age: 30 },
    ],
    otherState: "Some Other Value",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps", props);
    return state;
  }

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

  // componentWillMount() {
  //   console.log('App.js componentWillMount');
  // }

  componentDidMount() {
    console.log('App.js ComponentDidMount')
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('app.js shouldComponentUpdate');
    return true;
  }


  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('App.js componentWillUnmount');
  }


  render() {
    console.log('App.js render()');
    let persons = null;
    
    if(this.state.showPersons) {
        persons = <div>
                    <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler}/> 
                  </div> 
    }

    return (
          <div className={classes.App}>
            
            <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
            
            {
              this.state.showCockpit ? 
                    <Cockpit appTitle = {this.props.appTitle}
                            showPersons={this.state.showPersons} 
                            personsLength={this.state.persons.length} 
                            clickled={this.togglePersonsHandler}/>
              :
                    null
            }

            {persons}

          </div>
    );
  }
}

export default App;
