import './App.css';
import Counter from "./components/counter";
import Event from "./components/event";
import Toggle from "./components/toggle";
import Async from "./components/async";
import Parent from "./components/parrent";

function App() {
  return (
    <div className="App">
      <Event />
      {/*<Counter/>*/}
      {/*<Toggle>*/}
      {/*  <h1>Test</h1>*/}
      {/*</Toggle>*/}
      {/*<Async />*/}
      {/*<Parent/>*/}
    </div>
  );
}

export default App;
