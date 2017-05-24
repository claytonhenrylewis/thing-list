import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ThingList from './ThingList';
import AddThing from './AddThing';

class App extends Component {
  state = {
    things: {
    },
    newThing: '',
    n: 0,
  }

  constructor(props) {
    super(props);
    this.addNewThing = this.addNewThing.bind(this);
    this.updateNewThing = this.updateNewThing.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ThingList things={this.state.things}/>
        <AddThing addHandler={this.addNewThing}/>
      </div>
    );
  }

  updateNewThing = (e) => {
    this.setState({ newThing: e.target.value });
  }

  addNewThing = (thing) => {
    const state = {...this.state}
    state.n++;
    const newThing = {
      id: 'thing-' + (this.state.n),
      name: thing,
    };
    state.newThing = newThing;
    state.things[newThing.id] = newThing;
    this.setState(state);
    console.log(this.state);
  };
}

export default App;
