import { Component } from 'react';

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };
  intervalId = null;

  updateTime = () => {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };
  componentDidMount = () => {
    this.updateTime();
  };
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Clock;
