import React, { Component } from "react";

class Event extends Component {
  static defaultProps = {
    step: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      step: this.props.step,
    };
  }

  handleEvent(step) {
    // console.log("Increment button was clicked!", evt);
    console.log("this.props: ", this.props);
    console.log('step', step)
  }

  render() {
    const { step } = this.props;

    // Так не можна
    // this.props.step = 5;

    return (
      <div>
        <span>0</span>
        {/*Анонімний колл бек*/}
        <button type="button" onClick={() => this.handleEvent()}>
          Event {step}
        </button>
      </div>
    );
  }
}

export default Event