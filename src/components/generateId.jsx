import { nanoid } from "nanoid";
import {Component} from "react";

const array = [1,2,3,4,455,6,7,8,99,]
class FormGenerateId extends Component {
  loginInputId = nanoid();

  render() {
    console.log('loginInputId', this.loginInputId)
    return (
      <form>
        <label htmlFor={this.loginInputId}>Login</label>
        <input type="text" name="login" id={this.loginInputId}/>
        {
          array.map(item => {
            return <>
              <h2 key={nanoid()}>{item}</h2>
              <p>{nanoid()}</p>
            </>
          })
        }
      </form>
    );
  }
}

export default FormGenerateId
