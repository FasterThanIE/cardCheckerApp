import React, { Component } from 'react';
import './App.css';
import User from './models/User';

class App extends Component {

  state = {
    people: [
      {name: "Toma", age:27},
      {name: "Jeca", age:35},
      {name: "Velja",age: 9}
    ]
  }

  render() {
    return (
      <div className="App">
        { 
          this.state.people.map((person, i) => {
              return <h1>Jedan je <User age={person.age} name={person.name}></User></h1>
          })
        }
        <button onClick={this.switchNameHandler}>Click click click</button>
      </div>
    );
  }

  switchNameHandler = () => {
      console.log("TEST");
  };


}

export default App;
