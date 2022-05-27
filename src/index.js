import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';

// reduxに必要なもの
import { Provider } from 'react-redux'
import store from "./stores/";



ReactDOM.render(
    <App />, document.getElementById('root')
);

reportWebVitals();
