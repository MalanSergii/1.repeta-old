import React, { Component } from 'react';
import Controls from 'components/controls';

class Counter extends Component {
  static defaultProps = {
    value: 0,
  };
  state = {
    value: this.props.value,
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
    const { value } = this.state;
    return (
      <div>
        <span>Counter value: {value}</span>
        <Controls
          increaseCounter={this.increaseCounter}
          decreaseCounter={this.decreaseCounter}
        ></Controls>
      </div>
    );
  }
}

export default Counter;
