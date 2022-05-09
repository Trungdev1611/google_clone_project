import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextResult from './Context/ContextResult';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ContextResult>
      <App />
    </ContextResult>
  </BrowserRouter>, document.getElementById('root'),
);


