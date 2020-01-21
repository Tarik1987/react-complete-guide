import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import classes from './App.css'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        {id: 'dsdas',name: 'Tarik', age: 34},
        {id: '32312',name: 'Ernestina', age: 55},
        {id: 'bnjb',name: 'Mujo', age: 77}
      ]
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}


  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons = {this.state.persons} 
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
            />
    }

    return (
        <div className={classes.App}>
         <Cockpit 
          title = {this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
