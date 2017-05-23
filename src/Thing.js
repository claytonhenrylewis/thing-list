import React from 'react';
import './Thing.css';

const Thing = ({ thing }) => {
  return (
    <li className="Thing">{thing.name}</li>
  );
}

export default Thing;