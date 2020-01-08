import React, { Component } from 'react';

class Display extends Component {
  state = {};
  render() {
    return <h2>{this.props.result}</h2>;
  }
}

export default Display;
