import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./app/App"
import {BrowserRouter,} from 'react-router-dom'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App/>
    </BrowserRouter>,
  document.getElementById('root')
);