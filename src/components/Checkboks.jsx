import {Component} from "react";

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
};

class CheckboxForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = evt => {
    const { name } = evt.target;
    // Якщо тип елемента – checkbox, беремо значення checked,
    // в іншому випадку – value
    this.setState({ [name]: !this.state.agreed });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agreed } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}`
    );
  };


  render() {
    const { login, email, password, agreed } = this.state;
    console.log('agreed', agreed)

    return (
      <form onSubmit={this.handleSubmit}>
        {/* ... */}
        <label>
          Agree to terms
          <input
            type="checkbox"
            name="agreed"
            checked={agreed}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default CheckboxForm