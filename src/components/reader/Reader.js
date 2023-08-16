import { Component } from 'react';
import data from 'data/readerData.json';
class Reader extends Component {
  state = {
    current: 0,
  };
  onButtonClick = inc => {
    this.setState(prev => ({
      current: prev.current + inc,
    }));
  };
  render() {
    return (
      <section>
        <button disabled={this.state.current === 0} onClick={() => this.onButtonClick(-1)}>
          prev
        </button>
        <button
          disabled={this.state.current === data.length - 1}
          onClick={() => this.onButtonClick(1)}
        >
          next
        </button>
        <h3>{data[this.state.current].title}</h3>
        <p>{data[this.state.current].content}</p>
      </section>
    );
  }
}

export default Reader;
