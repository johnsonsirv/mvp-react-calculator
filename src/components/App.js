import React, { Component } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import '../css/App.css';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      result: '0',
    };
  }

  handleClick = btnName => {
    this.setState({ result: btnName });
  };

  render() {
    const { result } = this.state;
    return (
      <div className="app">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
