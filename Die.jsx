import React from 'react';
import './die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Die({ face, rolling }) {
  return (
    <div className="Die">
      <FontAwesomeIcon
        icon={['fas', `dice-${face}`]} // example: dice-one, dice-six
        className={`Die-icon ${rolling ? 'Die-shaking' : ''}`}
        size="6x"
      />
    </div>
  );
}

export default Die;
