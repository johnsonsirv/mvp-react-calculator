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
      operandStack: [],
      operatorStack: [],
      operations: ['÷', 'x', '-', '+'],
      finished: false,
      finishedTotal: null,
    };
  }

  performCalculation = (operandStack, operatorStack) => {
    let { total: prevTotal, next, operation } = this.state;
    prevTotal = operandStack.shift();
    next = operandStack.shift();
    operation = operatorStack.shift();
    let objTotal = calculate({ prevTotal, next, operation }, operation);
    const stop = operatorStack.length;
    let i = 0;
    while (i < stop) {
      prevTotal = objTotal.total;
      next = operandStack[i];
      operation = operatorStack[i];
      objTotal = calculate({ prevTotal, next, operation }, operation);
      i += 1;
    }

    return `${objTotal.total}`;
  };

  handleClick = btnName => {
    const { operandStack, operatorStack, operations, finished } = this.state;
    let { result } = this.state;
    this.setState({ finished: false, finishedTotal: null });
    let display;
    if (!operations.includes(btnName)) {
      display =
        result === '0' || operations.includes(result) || !finished
          ? `${btnName}`
          : `${result}${btnName}`;
    } else {
      operandStack.push(result);
      operatorStack.push(btnName);
      display = btnName;
    }

    if (btnName === '=') {
      operandStack.push(result);
      const output = this.performCalculation(operandStack, operatorStack);
      this.setState({ finishedTotal: output, finished: true });
      this.setState({ operandStack: [], operatorStack: [] });
    }

    this.setState({ result: display });
  };

  render() {
    let { result, finished, finishedTotal } = this.state;
    result = finished ? finishedTotal : result;
    console.log('state after = after render', this.state);
    return (
      <div className="app">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
