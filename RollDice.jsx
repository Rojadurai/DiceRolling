import React, { Component } from 'react';
import './rolldice.css';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      rolling: false
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const { sides } = this.props;
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];

    this.setState({
      die1: newDie1,
      die2: newDie2,
      rolling: true
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  getNumberFromFace(face) {
    const faceMap = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6
    };
    return faceMap[face] || 0;
  }

  render() {
    const { die1, die2, rolling } = this.state;
    const num1 = this.getNumberFromFace(die1);
    const num2 = this.getNumberFromFace(die2);
    const total = num1 + num2;

    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={die1} rolling={rolling} />
          <Die face={die2} rolling={rolling} />
        </div>
        <div className="RollDice-result">
          🎲 You rolled: <strong>{num1}</strong> and <strong>{num2}</strong><br />
          ➕ Total: <strong>{total}</strong>
        </div>
        <button onClick={this.roll} disabled={rolling}>
          {rolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
