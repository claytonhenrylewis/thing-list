import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ThingList from './ThingList';
import AddThing from './AddThing';
import AddThingButton from './AddThingButton';

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
    this.removeThing = this.removeThing.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddThingButton />
        <ThingList things={this.state.things} removeHandler={this.removeThing}/>
        
      </div>
    );
  }

  updateNewThing = (e) => {
    this.setState({ newThing: e.target.value });
  }

  addNewThing = (thing) => {
    const state = {...this.state};
    state.n++;
    const newThing = {
      id: 'thing-' + (this.state.n),
      name: thing,
    };
    state.newThing = newThing;
    state.things[newThing.id] = newThing;
    this.setState(state);
  }

  removeThing(thing) {
    console.log('remove');
    const state = {...this.state};
    delete state.things[thing.id];
    this.setState(state);
  }
}

export default App;
