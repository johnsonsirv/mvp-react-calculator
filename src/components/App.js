import React, { Component } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Display result={'0'} />
        <ButtonPanel />
      </div>
    );
  }
}
export default App;
