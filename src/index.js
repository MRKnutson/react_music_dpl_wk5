import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "semantic-ui-css/semantic.min.css"
import FuncApp from './FuncApp';

ReactDOM.render(
  <React.StrictMode>
    <h1>Class Component App</h1>
    <App />
    <hr style ={{marginTop: "100px", marginBottom: "80px"}} />
    <h1>Functional Component App</h1>
    <FuncApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
