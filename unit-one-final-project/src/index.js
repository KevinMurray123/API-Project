import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { ApiProvider } from './util/useContext';

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
      <Router>
        <App />
      </Router>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
