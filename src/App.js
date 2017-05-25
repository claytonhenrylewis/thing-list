import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SignOut from './SignOut';
import SignIn from './SignIn';
import ThingList from './ThingList';
import AddThingButton from './AddThingButton';
import base from './base';

class App extends Component {
  componentWillMount() {
    base.syncState(
      'things',
      {
        context: this,
        state: 'things',
      }
    )
  }

  state = {
    things: {
    },
  }

  renderMain() {
    const actions = {
      saveThing: this.saveThing,
      removeThing: this.removeThing,
      toggleCompleted: this.toggleCompleted,
    }

    return (
      <div>
        <SignOut />
        <AddThingButton addThing={this.addThing}/>
        <ThingList things={this.state.things} {...actions}/>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.signedIn() ? this.renderMain() : <SignIn />}
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
      completed: false,
      dueDate: null,
    }
  }

  removeThing = (thing) => {
    const things = {...this.state.things};
    things[thing.id] = null;
    this.setState({things});
  }

  signedIn = () => {
    return true;
  }
}

export default App;
