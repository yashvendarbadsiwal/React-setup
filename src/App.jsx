import { BrowserRouter, NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

import MainComponent from "./Components/MainComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navigationHeader">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/temp1">Temp1</NavLink>
          <NavLink to="/temp2">Temp2</NavLink>
          <NavLink to="/text">Text</NavLink>
        </div>
        <MainComponent />
      </BrowserRouter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-4">Hii Yash</div>
          <div className="col-6">Badsiwal</div>
        </div>
      </div>
    </div>
  );
}

export default App;
