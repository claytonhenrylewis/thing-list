import React, {Component} from 'react';
import './Thing.css';
import ContentEditable from 'react-contenteditable';
import Actions from './Actions'

class Thing extends Component{
  updateName = (e) => {
    const {thing, saveThing} = this.props;
    thing.name = e.target.value;
    saveThing(thing);
  }

  render() {
    const {thing, removeThing} = this.props;
    return (
      <li className="Thing">
        <input type="checkbox" value="on" />
        <div className="details">
          <ContentEditable className="name" html={thing.name} onChange={this.updateName}/>
          <Actions thing={thing} removeThing={removeThing} />
        </div>
      </li>
    );
  }
}

export default Thing;