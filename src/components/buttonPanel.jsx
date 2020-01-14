import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import '../css/buttonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = btnName => {
    clickHandler(btnName);
  };

  const buttonOperators = ['÷', 'x', '-', '+', '='];
  const buttonGroups = [
    {
      id: 'group1',
      names: ['AC', '+/-', '%', '÷'],
    },
    {
      id: 'group2',
      names: ['7', '8', '9', 'x'],
    },
    {
      id: 'group3',
      names: ['4', '5', '6', '-'],
    },
    {
      id: 'group4',
      names: ['1', '2', '3', '+'],
    },
    {
      id: 'group5',
      names: ['0', '.', '='],
    },
  ];

  const generateButton = (name, handleClick, operators, childKey) => {
    const color = operators.includes(name) ? 'orange' : 'gray';
    return (
      <Button
        name={name}
        wide={name === '0'}
        color={color}
        clickHandler={handleClick}
        key={childKey}
      />
    );
  };

  return (
    <div>
      {buttonGroups.map(group => (
        <div className="row" key={group.id}>
          {group.names.map((name, index) => generateButton(
            name,
            handleClick,
            buttonOperators,
            `${group.id}-${index}`,
          ))}
        </div>
      ))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
