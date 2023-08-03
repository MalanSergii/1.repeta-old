import { Component } from 'react';

class Input extends Component {
  state = {
    name: '',
    password: '',
  };
  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { value } = this.state;
    return (
      <>
        <label>
          name<input name="name" onChange={this.onInputChange} value={value}></input>
        </label>
        <br />
        <label>
          password<input name="password" onChange={this.onInputChange} value={value}></input>
        </label>
      </>
    );
  }
}

export default Input;
