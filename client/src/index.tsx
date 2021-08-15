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

reportWebVitals();
