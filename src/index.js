import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; /*
  React Router is a fully-featured client and server-side routing library for React,
  a JavaScript library for building user interfaces. 
  React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native. 
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*
  Browser Router store the current location in the browser's address bar using clean URLs amd navigates
  using the brower's buitl-in history stack.
  */
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


