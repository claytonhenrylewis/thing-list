import React, {Component} from 'react';
import './Thing.css';
import ContentEditable from 'react-contenteditable';
import Actions from './Actions'

class Thing extends Component{
  componentDidMount() {
    if (!this.nameInput.htmlEl.textContent) {
      this.nameInput.htmlEl.focus();
    }
  }

  updateName = (e) => {
    const {thing, saveThing} = this.props;
    thing.name = e.target.value;
    saveThing(thing);
  }

  toggleCompleted = (e) => {
    const {thing, saveThing} = this.props;
    thing.completed = e.target.checked;
    saveThing(thing)
  }

  updateDueDate = (e) => {
    console.log(e.target.value);
    const {thing, saveThing} = this.props;
    thing.dueDate = e.target.value;
    saveThing(thing);
  }

  blurOnEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
  }

  render() {
    const {thing, removeThing, toggleCompleted} = this.props;
    return (
      <li className="Thing">
        <input
          type="checkbox"
          checked={thing.completed}
          onChange={this.toggleCompleted}
        />
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
            ref={input => this.nameInput = input}
            onKeyPress={this.blurOnEnter}
          />
          <input type="date" value={thing.dueDate} onChange={this.updateDueDate}/>
          <Actions thing={thing} removeThing={removeThing} />
        </div>
      </li>
    );
  }
}

export default Thing;