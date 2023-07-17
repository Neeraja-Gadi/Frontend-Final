import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App.js"
import { BrowserRouter as Router } from 'react-router-dom';
// import serve from 'serve';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
