import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import ShopProvider from './context/ShopContext';
import swDev from './swDev'
import ErrorHandler from './components/ErrorHandler';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ShopProvider>
        {/* <ErrorHandler> */}
        <App />
        {/* </ErrorHandler> */}
      </ShopProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

swDev()