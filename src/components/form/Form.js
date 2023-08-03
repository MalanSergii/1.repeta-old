import { Component } from 'react';
const INITIAL_STATE = {
  name: '',
  password: '',
};

class Form extends Component {
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

  onFormSubmit = e => {
    e.preventDefault();
    this.props.getDataFromForm(this.state);
    this.setState({
      INITIAL_STATE,
    });
  };

  render() {
    const { name, password } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          name<input name="name" onChange={this.onInputChange} value={name}></input>
        </label>
        <br />
        <label>
          password
          <input name="password" onChange={this.onInputChange} value={password}></input>
        </label>
        <br />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
