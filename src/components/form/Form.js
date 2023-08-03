import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  password: '',
  level: '',
  agreement: false,
};

class Form extends Component {
  state = {
    name: '',
    password: '',
    level: '',
    agreement: false,
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onAgreementChange = () => {
    this.setState(prev => ({
      agreement: !prev.agreement,
    }));
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.getDataFromForm(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, password } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          <input name="name" onChange={this.onInputChange} value={name}></input>
          name
        </label>
        <br />
        <label>
          <input name="password" onChange={this.onInputChange} value={password}></input>
          password
        </label>
        <br />
        <p>your level</p>
        <label>
          <input
            name="level"
            value="junior"
            type="radio"
            onChange={this.onInputChange}
            checked={this.state.level === 'junior'}
          ></input>
          junior
        </label>
        <br />
        <label>
          <input
            name="level"
            value="middle"
            type="radio"
            onChange={this.onInputChange}
            checked={this.state.level === 'middle'}
          ></input>
          middle
        </label>
        <br />
        <label>
          <input
            name="level"
            value="senior"
            type="radio"
            onChange={this.onInputChange}
            checked={this.state.level === 'senior'}
          ></input>
          senior
        </label>
        <br />
        <label>
          <input
            onChange={this.onAgreementChange}
            type="checkbox"
            name="agreement"
            checked={this.state.agreement}
          ></input>
          Agreement
        </label>
        <button disabled={!this.state.agreement} type="submit">
          submit
        </button>
      </form>
    );
  }
}

export default Form;
