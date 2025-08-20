
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Import
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* 2. Wrap your App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);