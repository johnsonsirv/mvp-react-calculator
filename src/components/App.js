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
      statusText: '',
    };
  }

  performCalculation = (operandStack, operatorStack) => {
    let { total: prevTotal, next, operation } = this.state;
    prevTotal = operandStack.shift();
    next = operandStack.shift();
    operation = operatorStack.shift();
    let objTotal = calculate({ prevTotal, next, operation }, operation);
    let i = 0;
    while (i < operatorStack.length) {
      prevTotal = objTotal.total;
      next = operandStack[i];
      operation = operatorStack[i];
      objTotal = calculate({ prevTotal, next, operation }, operation);
      i += 1;
    }

    return `${objTotal.total}`;
  };

  handleClick = btnName => {
    this.setState({ finished: false, finishedTotal: null });
    const { operandStack, operatorStack, operations, statusText } = this.state;
    let { result } = this.state;
    let display, logText;
    if (!operations.includes(btnName)) {
      display =
        result === '0' || operations.includes(result)
          ? `${btnName}`
          : `${result}${btnName}`;
      logText = `${statusText}${btnName}`
    } else {
      operandStack.push(result);
      operatorStack.push(btnName);
      display = btnName;
      logText = `${statusText}${btnName}`
    }

    if (btnName === '=') {
      operandStack.push(result);
      const output = this.performCalculation(operandStack, operatorStack);
      this.setState({
        finishedTotal: output,
        finished: true,
        operandStack: [],
        operatorStack: [],
      });
      logText = '';
      display = '0';
    }
    
    this.setState({ statusText: logText });
    this.setState({ result: display });
  };

  render() {
    let { result, finished, finishedTotal, statusText } = this.state;
    result = finished ? finishedTotal : result;
    statusText = finished ? 'Ready' : statusText;
    return (
      <div className="app">
        <Display result={result} statusText={statusText} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
