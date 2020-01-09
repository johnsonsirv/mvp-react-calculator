import React, { Component } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div>
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}
export default App;
