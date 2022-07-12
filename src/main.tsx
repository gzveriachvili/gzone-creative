import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import RouteSwitch from './components/RouteSwitch/RouteSwitch';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouteSwitch />
    </ChakraProvider>
  </React.StrictMode>
);
