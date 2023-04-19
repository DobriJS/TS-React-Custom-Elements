import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NavigationProvider } from './context/NavigationContext';

ReactDOM.render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
