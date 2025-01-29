import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './public/App.js';
import reportWebVitals from './public/reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function

reportWebVitals();
