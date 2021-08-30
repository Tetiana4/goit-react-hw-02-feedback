import React from "react";

export default function Statistics() {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
      <h2>Statistics</h2>
      <ul>
        <li>Good:</li>
        <li>Neutral:</li>
        <li>Bad:</li>
      </ul>
    </div>
  );
}