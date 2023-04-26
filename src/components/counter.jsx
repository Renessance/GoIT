import React, { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    count: 0,
    initialValue: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue
    };
  }

  handleIncrement() {
    this.setState({ kek: this.state.count + 1 })
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 })
  }

  //Не можна так робити
  // state = { fullName: "Poly" };

  render() {
    console.log('this', this.state.count)

    //Не можна так робити
    // this.state.fullName = "Mango";

    return (
      <div>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        {this.state.count}
      </div>
    );
  }
}

export default Counter