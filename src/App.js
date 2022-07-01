import logo from './logo.svg';
import './App.css';

import axios from "axios";
import React, { useEffect } from 'react';

const baseURL = "https://paracetamol-node.herokuapp.com/users/api/server";

function App() {
  const [message, setMessage] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMessage(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { message || 'Hello'}
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
