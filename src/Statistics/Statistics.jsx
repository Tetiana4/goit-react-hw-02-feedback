import { React, Component } from "react";

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
        <h2>Statistics:</h2>
        <ul>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
