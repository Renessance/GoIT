import {Component} from "react";

class formControlled extends Component {
  state = {
    value: "",
  };

  handleChange = evt => {
    // if (this.state.value.length < 5) {
      this.setState({ value: evt.target.value });
    // }
  };

  render() {
    const { value } = this.state;
    console.log('state', this.state.value)
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default formControlled