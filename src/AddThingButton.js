import React from 'react';
import './AddThingButton.css';

const AddThingButton = ({ addThing }) => {
  return (<button className="add-thing" onClick={addThing}>Add Thing</button>);
}

export default AddThingButton;