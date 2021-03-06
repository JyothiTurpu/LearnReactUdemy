import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //   console.log('Persons.js getDerivedStateFromProps');
    //   return state;
    // }

    // componentWillReceiveProps(props) {
    //   console.log('persons.js componentWillReceiveProps', props);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log('Persons.js shouldComponentUpdate');
    //   if(nextProps.persons !== this.props.persons)
    //       return true;
    //   else
    //       return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('Persons.js getSnapShotBeforeUpdate');
      return { message: 'SnapShot!' };
    }

    componentWillUnmount() {
      console.log('persons.js componentWillUnmount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('Persons.js componentDidUpdate');
      console.log(snapshot);
    }

    render() {
      console.log('Persons.js render')
      return (this.props.persons.map((person, index) => {
      return (<Person key={person.id} click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
        />)
      }))
    }

} 

export default Persons;