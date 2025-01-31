import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.js';
// import reportWebVitals from './reportWebVitals.js';
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function

reportWebVitals();
