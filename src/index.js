import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "semantic-ui-css/semantic.min.css"
import FuncApp from './FuncApp';
import { AppContainer, StyledRule } from './components/Styles';


ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
    <h1>Class Component App</h1>
    <hr />
    <App />
    <StyledRule />
    <h1>Functional Component App</h1>
    <hr />
    <FuncApp />
    </AppContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


