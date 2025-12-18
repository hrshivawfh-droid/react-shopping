import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginComponent } from './components/login/login.component';
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap'; //imports all components of bootstrap[carousel,navbar,offcanvas,modals]
import { DataBinding } from './components/data-binding/data-binding';
import { AjaxDemo, AjaxDemo1 } from './ajax/ajax-demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < AjaxDemo />
    < AjaxDemo1 />
    <DataBinding />
    <LoginComponent/>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
