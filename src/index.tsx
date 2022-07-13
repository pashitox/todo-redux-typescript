

import store from './todo/redux/store'
import { Provider } from 'react-redux'
import { createRoot } from "react-dom/client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
//import { ChakraProvider } from '@chakra-ui/react';

import { BrowserRouter } from "react-router-dom";

// 2. Extend the theme to include custom colors, fonts, etc

//const theme = extendTheme({
//  styles: {
//    global: {
//      'html, body': {
//        backgroundColor: 'rgb(26,32,44)',
//      },
//    },
//  },
//});


const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    
    <BrowserRouter>
    <App />
  </BrowserRouter>
     
  </Provider>
  // </React.StrictMode>
);

//<ChakraProvider theme={theme}>    
//</ChakraProvider> 