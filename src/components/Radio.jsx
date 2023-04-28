// Використовуємо Enumerable, щоб не створювати антипатерн "магічні рядки"

import {Component} from "react";

const Gender = {
  MALE: "male",
  FEMALE: "female",
};

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  agreed: false,
  gender: null,
};

class Radio extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    console.log('value', value)
    console.log('name', name)
    this.setState({
      "gender": value,
      "agreed":  !this.state.agreed
    })
  };

  render() {
    const {login, email, password, agreed, gender} = this.state;
console.log('state', this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <h2>Choose your gender</h2>
          <label>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="male"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="female"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}

export default Radio




// this.setState({ "gender": name });
