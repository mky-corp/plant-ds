import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { d } from './utils/Globals';
import reportWebVitals from './reportWebVitals';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';
import './App.css';

const $app = d.getElementById('app');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  $app
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
