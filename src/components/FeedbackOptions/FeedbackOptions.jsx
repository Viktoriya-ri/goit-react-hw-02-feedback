import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(option => (
        
      ))}
    </Container>
  )
}
