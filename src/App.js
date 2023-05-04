import './App.css';
import React, {useEffect, useState} from "react";
import ComplexForm from "./components/complexForm";
import clsx from "clsx";

function App() {
  const [isShowInDOM, setIsShowInDOM] = useState(true)
  const [isShowStyle, setIsShowStyle] = useState(false)

  return (
    <div className="App">
      <h1>Life cycle</h1>

      <div className={clsx(
        {["hide"]: isShowStyle}
      )}>
        {isShowInDOM &&
          <ComplexForm someString="someString" />
        }
      </div>


      <div style={{marginTop: "20px"}} >
        <button onClick={() => setIsShowInDOM(!isShowInDOM)}>Destroy Component</button>
        <button onClick={() => setIsShowStyle(!isShowStyle)}>Hide Component</button>
      </div>

    </div>
  );
}

export default App;
