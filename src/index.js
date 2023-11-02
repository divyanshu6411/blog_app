import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { ContextProvider } from './components/context/Context.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);


