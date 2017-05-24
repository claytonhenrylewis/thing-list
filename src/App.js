import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ThingList from './ThingList';
import AddThingButton from './AddThingButton';

class App extends Component {
  state = {
    things: {
    },
    newThing: '',
  }

  constructor(props) {
    super(props);
    this.updateNewThing = this.updateNewThing.bind(this);
    this.removeThing = this.removeThing.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddThingButton addThing={this.addThing}/>
        <ThingList things={this.state.things} removeHandler={this.removeThing}/>
        
      </div>
    );
  }

  updateNewThing = (e) => {
    this.setState({ newThing: e.target.value });
  }

  addThing = () => {
    const state = {...this.state};
    const newThing = this.thing();
    state.newThing = newThing;
    state.things[newThing.id] = newThing;
    this.setState(state);
  }

  thing() {
    return {
      id: `thing-${Date.now()}`,
      name: '',
    }
  }

  removeThing(thing) {
    console.log('remove');
    const state = {...this.state};
    delete state.things[thing.id];
    this.setState(state);
  }
}

export default App;
