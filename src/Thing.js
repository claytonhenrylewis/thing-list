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

  handleChange = (e) => {
    const {thing, saveThing} = this.props;
    const field = e.currentTarget.getAttribute('name');
    thing[field] = e.target.value;
    saveThing(thing);
  }

  toggleCompleted = (e) => {
    const {thing, saveThing} = this.props;
    thing.completed = e.target.checked;
    saveThing(thing);
  }

  blurOnEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
  }

  render() {
    const {thing, removeThing} = this.props;
    return (
      <li className="Thing">
        <input
          type="checkbox"
          name="completed"
          defaultChecked={thing.completed}
          onChange={this.toggleCompleted}
        />
        <div className="details">
          <ContentEditable
            className="name"
            name="name"
            html={thing.name}
            onChange={this.updateName}
            ref={input => this.nameInput = input}
            onKeyPress={this.blurOnEnter}
          />
          <input
            type="date"
            name="dueDate"
            value={thing.dueDate}
            onChange={this.handleChange}
          />
          <Actions thing={thing} removeThing={removeThing} />
        </div>
      </li>
    );
  }
}

export default Thing;