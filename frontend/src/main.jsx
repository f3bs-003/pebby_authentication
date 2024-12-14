import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client'; // React 18+ root creation
// import App from './App.jsx'; // Your main App component

// // Importing Bootstrap CSS for styling
// import 'bootstrap/dist/css/bootstrap.min.css';
// // Importing Bootstrap JS for interactive components like modals, dropdowns
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// // Render the app inside the root element of the HTML page
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
