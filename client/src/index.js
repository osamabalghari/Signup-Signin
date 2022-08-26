import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStateContext from "./context/UserStateContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserStateContext>
      <App />
    </UserStateContext>
  </React.StrictMode>
);
