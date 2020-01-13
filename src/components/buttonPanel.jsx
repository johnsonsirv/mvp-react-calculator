import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import '../css/buttonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = btnName => {
    clickHandler(btnName);
  };

  return (
    <div>
      <div className="row">
        <Button name="AC" color="gray" clickHandler={handleClick} />
        <Button name="+/-" color="gray" clickHandler={handleClick} />
        <Button name="%" color="gray" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="7" color="gray" clickHandler={handleClick} />
        <Button name="8" color="gray" clickHandler={handleClick} />
        <Button name="9" color="gray" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="4" color="gray" clickHandler={handleClick} />
        <Button name="5" color="gray" clickHandler={handleClick} />
        <Button name="6" color="gray" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="1" color="gray" clickHandler={handleClick} />
        <Button name="2" color="gray" clickHandler={handleClick} />
        <Button name="3" color="gray" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="row">
        <Button name="0" wide color="gray" clickHandler={handleClick} />
        <Button name="." color="gray" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
