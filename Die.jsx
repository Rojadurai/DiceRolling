import React, { Component } from 'react';
import './die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Die extends Component {
  render() {
    const { face, rolling } = this.props;
    return (
      <div className="Die">
        <FontAwesomeIcon
          icon={['fas', `dice-${face}`]}
          className={rolling ? 'Die-shaking' : ''}
        />
      </div>
    );
  }
}

export default Die;
