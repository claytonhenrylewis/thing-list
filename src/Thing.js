import React from 'react';
import './Thing.css';

const Thing = (props) => {
  console.log(props);
  return (
    <li className="Thing">
      <input type="checkbox" value="on" />
      <div className="details">
        <div className="name">
          {props.thing.name}
        </div>
        <span className="actions">
          <button className="remove" onClick={() => props.removeHandler(props.thing)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
      </div>
    </li>
  );
}

export default Thing;