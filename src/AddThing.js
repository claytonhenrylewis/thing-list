import React from 'react';
import './AddThing.css';

class AddThing extends React.Component{
  constructor(props) {
    super(props);
    this.addNewThing = this.addNewThing.bind(this);
  }
  render() {
    return (
      <form className="AddThing" onSubmit={this.addNewThing}>
        <input type="text" placeholder="New Thing"/>
        <button className="button" type="submit">Add Thing</button>
      </form>
    );
  }

  addNewThing(e) {
    e.preventDefault();
    if (e.target.querySelector('input').value) {
      this.props.addHandler(e.target.querySelector('input').value);
      e.target.reset();
    }
  }
}

export default AddThing;