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
        <input type="checkbox" value="on" />
        <div className="details">
          <ContentEditable
            className="name"
            html={thing.name}
            onChange={this.updateName}
            ref={input => this.nameInput = input}
            onKeyPress={this.blurOnEnter}
          />
          <Actions thing={thing} removeThing={removeThing} />
        </div>
      </li>
    );
  }
}

export default Thing;