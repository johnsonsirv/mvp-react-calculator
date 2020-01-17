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
      arithmetic: ['÷', 'x', '-', '+'],
      calculation: ['AC', '+/-', '%'],
      finished: false,
      finishedTotal: null,
      statusText: '',
    };
  }

  doArithmetic = (operandStack, operatorStack) => {
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

    return objTotal;
  };

  setTotal = ({ total }) => {
    this.setState({
      finishedTotal: `${total}`,
      finished: true,
      operandStack: [],
      operatorStack: [],
    });

    return { doneStatusText: '', doneDisplayText: '0' };
  };

  updateDisplay = (statusText, result) => this.setState({ statusText, result });

  handleClick = btnName => {
    const {
      operandStack,
      operatorStack,
      arithmetic,
      calculation,
      result,
    } = this.state;
    let { statusText } = this.state;
    this.setState({ finished: false, finishedTotal: null });

    let display;
    if (!arithmetic.includes(btnName)) {
      display = result === '0' || arithmetic.includes(result)
        ? `${btnName}`
        : `${result}${btnName}`;
      statusText = `${statusText}${btnName}`;
    } else {
      operandStack.push(result);
      operatorStack.push(btnName);
      display = btnName;
      statusText = `${statusText}${btnName}`;
    }

    if (calculation.includes(btnName)) {
      const next = btnName === 'AC' ? 0 : 1;
      const output = calculate(
        { prevTotal: result, next, operation: btnName },
        btnName,
      );
      const { doneStatusText, doneDisplayText } = this.setTotal(output);

      statusText = doneStatusText;
      display = doneDisplayText;
    }

    if (btnName === '=') {
      operandStack.push(result);
      const output = this.doArithmetic(operandStack, operatorStack);
      const { doneStatusText, doneDisplayText } = this.setTotal(output);

      statusText = doneStatusText;
      display = doneDisplayText;
    }

    this.updateDisplay(statusText, display);
  };

  render() {
    let { result, statusText } = this.state;
    const { finished, finishedTotal } = this.state;
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
