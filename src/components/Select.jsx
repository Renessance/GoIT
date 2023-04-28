import {Component} from "react";

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
  age: "",
};

class Select extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({
      "age": value,
    });
  };

  render() {
    const { login, email, password, agreed, gender, age, isEmpty } = this.state;
    console.log('age', age)

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit" disabled={age === ""}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default Select













// this.setState({ "age": value });