import React, { useState } from 'react';
import './rolldice.css';
import Die from './Die';

const RollDice = ({ sides = ['one', 'two', 'three', 'four', 'five', 'six'] }) => {
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie1(newDie1);
    setDie2(newDie2);
    setRolling(true);

    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  const getNumberFromFace = (face) => {
    const faceMap = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6
    };
    return faceMap[face] || 0;
  };

  const num1 = getNumberFromFace(die1);
  const num2 = getNumberFromFace(die2);
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
      <button onClick={roll} disabled={rolling} className="RollDice-button">
        {rolling ? 'Rolling...' : 'Roll Dice!'}
      </button>
    </div>
  );
};

export default RollDice;
