import React from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

const Button = ({ name }) => <div className="btn">{name}</div>;

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
