import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { AuthProvider } from "./store/authcontext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
        <BrowserRouter>
          <App />
          <ToastContainer/>
        </BrowserRouter>  
    </AuthProvider>
  </React.StrictMode>
);
