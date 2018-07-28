import React from 'react';
import { Message } from 'semantic-ui-react';

const InlineError = ({ text, error }) => (
  <Message negative>
    <Message.Header>{text}</Message.Header>
    <p>{error && error}</p>
  </Message>
);

export default InlineError;
