import { Component } from 'react';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.message);
    this.setState({
      message: '',
    });
  };

  onChange = e => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <textarea
          value={this.state.message}
          style={{ resize: 'none', width: 300, height: 100 }}
          onChange={this.onChange}
        ></textarea>
        <br />
        <button type="submit">add task</button>
      </form>
    );
  }
}

export default TodoEditor;
