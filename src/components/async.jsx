import React, {Component} from "react";

class Async extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  // Запустимо цикл і створимо 3 операції оновлення
  componentDidMount() {
    for (let i = 0; i < 3; i += 1) {
      // Якщо переглянути стан, на всіх ітераціях буде 0
      // Тому що це синхронний код та оновлення стану ще не відбулося
      this.setState((prevState) => ({ value: prevState.value + 1 }));
      console.log('out', this.state.value);
    }

    for (let i = 0; i < 3; i += 1) {
      // Якщо переглянути стан, на всіх ітераціях буде 0
      // Тому що це синхронний код та оновлення стану ще не відбулося
      console.log(this.state.value); // 0
      this.setState(prevState => {
        console.log("in", prevState.value);
        return {value: prevState.value + 1};
      });
    }
  }
  // Якщо переглянути стан, переданий callback-функції під час її виклику,
  // отримаємо актуальний стан на момент оновлення.

  // буде різний на кожній ітерації
  render() {
      return (
        <div>
          <h1>Async</h1>
        </div>
      );
  }
}

export default Async