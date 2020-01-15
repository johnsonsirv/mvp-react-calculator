import React, { Component } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import '../css/App.css';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
