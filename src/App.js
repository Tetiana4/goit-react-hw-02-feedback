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

  countTotalFeedback() {
    const totalFeedback = Object.values(this.state);
    return totalFeedback.reduce((acc, item) => acc + item);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  leaveFeedback = option => {
    this.setState(prevSate => ({
      [option]: prevSate[option] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <FeedbackOptions
          options={this.state}
          onHandleButton={this.leaveFeedback}
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
