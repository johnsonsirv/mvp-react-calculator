import React from 'react';
import PropTypes from 'prop-types';
import '../css/display.css';

const Display = ({ result, statusText }) => {
  return (
    <div className="display">
      <div className="display-text">{statusText}</div>
      <div className="display-result">{result}</div>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
  statusText: 'Ready'
};

Display.propTypes = {
  result: PropTypes.string,
  statusText: PropTypes.string,
};

export default Display;
