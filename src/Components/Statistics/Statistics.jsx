import React from 'react';
import { Container, Title } from './Statistics.styled';

const Statistics = ({ onGood, onNeutral, onBad, onTotal, onPercentage }) => (
  <Container>
    <Title>Statistics:</Title>
    <p>Good: {onGood}</p>
    <p>Neutral: {onNeutral}</p>
    <p>Bad: {onBad}</p>
    <p>Total: {onTotal}</p>
    <p>Positive feedback: {onPercentage}%</p>
  </Container>
);

export default Statistics;
