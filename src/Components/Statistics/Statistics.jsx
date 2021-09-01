import React from 'react';

const Statistics = ({ onGood, onNeutral, onBad, onTotal, onPercentage }) => (
  <div>
    <h2>Statistics:</h2>
    <p>Good: {onGood}</p>
    <p>Neutral: {onNeutral}</p>
    <p>Bad: {onBad}</p>
    <p>Total: {onTotal}</p>
    <p>Positive feedback: {onPercentage}%</p>
  </div>
);

export default Statistics;
