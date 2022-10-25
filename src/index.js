import React from "react";
import ReactDOM from 'react-dom/client';
import './scss/reset.scss';
import './scss/main.scss';
import {Header} from './js/header';
import {Footer} from "./js/footer";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <App />
      <Footer />
  </React.StrictMode>
);
