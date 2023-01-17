import React from 'react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter} from 'react-router-dom'
import ReactDom from 'react-dom'
ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

