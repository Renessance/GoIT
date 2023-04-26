import React, { Component } from "react";
import clsx from "clsx";

class Toggle extends Component {
  static defaultProps = {
    isOpen: false,
    initialValue: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.initialValue
    };
  }

  show = () => this.setState({ isOpen: true });

  hide = () => this.setState({ isOpen: false });

  render() {
    const someFun = () => {
      return false
    }
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <p style={{padding: "50px"}} onClick={this.show}>Show</p>
        <button className={clsx(isOpen && 'someClass')} onClick={this.hide}>Hide</button>
        <p>{isOpen && children}</p>
      </>
    );
  }
}
export default Toggle





// constructor(props) {
//   super(props);
//   this.state = {
//     isOpen: false
//   };
// }