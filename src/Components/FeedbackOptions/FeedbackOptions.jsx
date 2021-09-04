import React from 'react';
import { Component } from 'react';
import { Container, Title, List, Div, Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onHandleButton } = this.props;
    return (
      <Container>
        <Title>Please leave feedback</Title>
        <Div>
          {Object.keys(options).map(option => (
            <List key={option}>
              <Button type="button" onClick={() => onHandleButton(option)}>
                {option}
              </Button>
            </List>
          ))}
        </Div>
      </Container>
    );
  }
}

export default FeedbackOptions;
