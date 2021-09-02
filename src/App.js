import React, { Component } from 'react';

import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';
import Section from './Components/Section';
import Statistics from './Components/Statistics';
import { Title } from './Components/Statistics/Statistics.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    const totalFeedback = Object.values(this.state);
    return totalFeedback.reduce((acc, item) => acc + item);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <>
        <FeedbackOptions
          onHandleGood={this.handleGood}
          onHandleNeutral={this.handleNeutral}
          onHandleBad={this.handleBad}
        />

        {this.countTotalFeedback(this.state) === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section>
            <Title>Statistics:</Title>
            <Statistics
              onGood={good}
              onNeutral={neutral}
              onBad={bad}
              onTotal={this.countTotalFeedback()}
              onPercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
