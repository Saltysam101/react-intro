import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
      <div className = "App" >
        <header className = "App-header" >
          <img src = { logo }
          className = "App-logo"
          alt = "logo" />
          <p>
          React is so cool!
          </p> 
          <a className = "App-link"
          href = "https://reactjs.org"
          target = "_blank"
          rel = "noopener noreferrer" >
          Learn React 
          </a> 
        </header > 

        <h1>React Heading</h1>
        <p>React paragraph</p>
        <ul>
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
        </ul>
        </div>
    );
}

export default App;