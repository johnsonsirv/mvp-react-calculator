import React, { Component } from 'react';
import Button from './button';
import '../css/buttonPanel.css';

class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row">
          <Button name="AC" color="gray" />
          <Button name="+/-" color="gray" />
          <Button name="%" color="gray" />
          <Button name="÷" />
        </div>
        <div className="row">
          <Button name="7" color="gray" />
          <Button name="8" color="gray" />
          <Button name="9" color="gray" />
          <Button name="x" />
        </div>
        <div className="row">
          <Button name="4" color="gray" />
          <Button name="5" color="gray" />
          <Button name="6" color="gray" />
          <Button name="-" />
        </div>
        <div className="row">
          <Button name="1" color="gray" />
          <Button name="2" color="gray" />
          <Button name="3" color="gray" />
          <Button name="+" />
        </div>
        <div className="row">
          <Button name="0" wide color="gray" />
          <Button name="." color="gray" />
          <Button name="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
