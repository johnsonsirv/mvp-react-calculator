import React from 'react';
import PropTypes from 'prop-types';
import '../css/button.css';

const Button = ({ name, wide, color }) => {
  const btnStyles = {
    orange: 'btn-default',
    gray: 'btn-secondary',
  };
  const baseClass = `${btnStyles[color]} btn btn-`;
  const classes = wide ? `${baseClass}50` : `${baseClass}25`;

  return <div className={classes}>{name}</div>;
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
