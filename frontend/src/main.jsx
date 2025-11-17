// Importar estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

// Importaciones principales
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importar el enrutador principal
import Router from './router/Router.jsx';

import App from './App';

// Renderizar la aplicación principal
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
