import React, {Component} from 'react';

class SimpleCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      userName: "",
      secondsElapsed: 0,
      isValid: false
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  decrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  };
  handleChange = (event) => {
    this.setState((prevState) => {
      return { name: event.target.value};
    });
  };

  // componentDidMount() {
  //   console.log('componentDidMount')
  // }
// componentDidUpdate(prevProps, prevState, snapshot) {
//   console.log('Updating', )
// }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('componentDidUpdate', )
  //   // Виповнюєм дію, якщо значення `count` змінилось
  //   if (this.state.count !== prevState.count) {
  //     console.log('Свойство count было обновлено:', this.state.count);
  //   }
  // }

  // shouldComponentUpdate(prevProps, nextState) {
  //   // console.log('prevProps', prevProps)
  //   // console.log('nextState', nextState)
  //   // console.log('this.state.count', this.state.count)
  //   if (nextState.count !== this.state.count) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  // }

  //Timer
  componentDidMount() {
    // Запускаем таймер, используя setInterval
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        secondsElapsed: prevState.secondsElapsed + 1
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  // Validation
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('nextState', prevState)
  //   const { userName } = prevState;
  //   const isValid = this.validateName(userName);
  //
  //   if (isValid !== this.state.isValid) {
  //     this.setState({ isValid });
  //     return true;
  //   }
  //
  //   return prevState.userName !== this.state.userName;
  // }
  //
  // validateName = (name) => {
  //   const nameRegex = /^.{3,15}$/;
  //   return nameRegex.test(name);
  // };
  //
  // handleChange = (event) => {
  //   this.setState({ userName: event.target.value });
  // };

  render() {
    return (

      <div>
        <input type="text" name="userName" onChange={this.handleChange}/>
        <h1>Счетчик: {this.state.count}</h1>
        <button onClick={this.incrementCount}>+</button>
        <button onClick={this.decrementCount}>-</button>
        <p/>
        <button disabled={!this.state.isValid}>Submit</button>
        <p>Пройшло секунд: {this.state.secondsElapsed}</p>
      </div>
    );
  }
}

export default SimpleCounter;
