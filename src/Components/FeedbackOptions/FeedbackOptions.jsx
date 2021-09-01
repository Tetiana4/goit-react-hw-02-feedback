import React from 'react';
import { Container, Title, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onHandleGood, onHandleNeutral, onHandleBad }) => (
  <Container>
    <Title>Please leave feedback</Title>

    <Button type="button" onClick={onHandleGood}>
      Good
    </Button>
    <Button type="button" onClick={onHandleNeutral}>
      Neutral
    </Button>
    <Button type="button" onClick={onHandleBad}>
      Bad
    </Button>
  </Container>
);

export default FeedbackOptions;
