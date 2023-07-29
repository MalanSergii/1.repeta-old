import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0,
  };

  increaseCounter = () => {
    this.setState(prev => ({
      value: prev.value + 1,
    }));
  };

  decreaseCounter = () => {
    this.setState(prev => ({
      value: prev.value - 1,
    }));
  };

  render() {
    return (
      <div>
        <span>Counter value: {this.state.value}</span>
        <div>
          <button onClick={this.increaseCounter}>increse</button>
          <button onClick={this.decreaseCounter}>decrease</button>
        </div>
      </div>
    );
  }
}

export default Counter;
