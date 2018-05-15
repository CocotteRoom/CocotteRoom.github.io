import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ content }) => <button>{content}</button>;

Button.propTypes = {
  content: PropTypes.string.isRequired,
};
