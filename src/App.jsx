import {FadeTransform, Fade} from 'react-animation-components'
import logo from './logo.svg';
import './App.scss';

import Temp1 from './Components/temp1';

function App() {
  return (
    <div className="App">
      <FadeTransform in transformProps={{exitTransform:'scale(0.5) translateY(-50%)'}}>
        <Temp1 />
      </FadeTransform>
      <Fade in enterOpacity={0.85}>
        <h1>I'm transitioning to opacity:0.85</h1>
      </Fade>
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
    </div>
  );
}

export default App;
