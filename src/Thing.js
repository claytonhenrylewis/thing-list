import React from 'react';
import './Thing.css';
import ContentEditable from 'react-contenteditable';

const Thing = ({ thing, saveThing }) => {
  const updateName = (e) => {
    thing.name = e.target.value;
    saveThing(thing);
  }

  return (
    <li className="Thing">
      <input type="checkbox" value="on" />
      <div className="details">
        <ContentEditable className="name" html={thing.name} onChange={updateName}/>
        <span className="actions">
          <button className="remove" onClick={() => {}}>
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </div>
    </li>
  );
}

export default Thing;