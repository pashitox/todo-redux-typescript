

import store from './todo/redux/store'
import { Provider } from 'react-redux'
import { createRoot } from "react-dom/client";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";


import { BrowserRouter } from "react-router-dom";




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