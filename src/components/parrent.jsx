import React, { Component } from "react";

const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

class Parent extends Component {
  state = {
    clock: new Date().toLocaleTimeString(),
  };

  // Метод, який будемо передавати в Button для виклику під час кліку
  updateMessage = evt => {
    console.log("target", evt); // Доступний об'єкт події
    this.setState({
      clock: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.clock}</span>
        {/*<input  value="Change 1111" onChange={ (e) => this.updateMessage(e.target.value)}/>*/}
        {/*<input value="Change 2222" onChange={ (e) => this.updateMessage(e.target.value)} />*/}
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}

export default Parent