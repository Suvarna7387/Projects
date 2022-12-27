import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {CartProvider} from 'react-use-cart';
import {ThemeProvider} from './GlobalComponents/ThemeProvider'

render(
<React.StrictMode>
  <ThemeProvider>
  <CartProvider>
  <App />
  </CartProvider>
</ThemeProvider>
  </React.StrictMode>
  , document.getElementById('root') );
  



