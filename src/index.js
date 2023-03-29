import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GuestGuard from "./GuestGuard/GuestGuard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GuestGuard>
          <App />
      </GuestGuard>
  </React.StrictMode>
);
