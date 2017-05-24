import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ThingList from './ThingList';
import AddThingButton from './AddThingButton';

class App extends Component {
  state = {
    things: {
    },
  }

  constructor(props) {
    super(props);
    this.removeThing = this.removeThing.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddThingButton addThing={this.addThing}/>
        <ThingList things={this.state.things} saveThing={this.saveThing}/>
        
      </div>
    );
  }

  saveThing = (thing) => {
    const things = {...this.state.things};
    things[thing.id] = thing;
    this.setState({ things });
  }

  addThing = () => {
    const state = {...this.state};
    const newThing = this.thing();
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
