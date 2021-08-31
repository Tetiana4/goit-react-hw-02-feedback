import React from "react";

export default function Statistics() {
  //   state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // }
  return (
    <div>
      <h1>Please leave feedback</h1>
      <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good:</p>
        </li>
        <li>
          <p>Neutral:</p>
        </li>
        <li>
          <p>Bad:</p>
        </li>
      </ul>
    </div>
  );
}
