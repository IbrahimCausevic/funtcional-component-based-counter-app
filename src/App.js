import React from "react";
import "./App.css";

const App = (props) => {
  const [state, setState] = React.useState({
    number: 0,
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="border">
          <h1>{state.number}</h1>
          <div className="flex">
            <button
              className="count"
              onClick={() => {
                setState({ number: state.number + 1 });
              }}
            ></button>
            <button
              className="reset"
              onClick={() => setState({ number: 0 })}
            ></button>{" "}
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
