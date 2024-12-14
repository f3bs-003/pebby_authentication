// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';

// // Importing components
// import App from './App';
// import Login from './Login';
// import Dashboard from './Dashboard';

// // Main component
// const Main = () => {
//   const [user, setUser] = useState(null);  // State to track the logged-in user

//   // Handle login - set user after successful login
//   const handleLogin = (userData) => {
//     setUser(userData);
//   };

//   // Handle logout - reset user state
//   const handleLogout = () => {
//     setUser(null);
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Route for login page */}
//         <Route path="/" element={<Login onLogin={handleLogin} />} />

//         {/* Route for dashboard, protected route */}
//         <Route
//           path="/dashboard"
//           element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
//         />

//         {/* Fallback route */}
//         <Route path="*" element={<Login onLogin={handleLogin} />} />
//       </Routes>
//     </Router>
//   );
// };

// ReactDOM.render(<Main />, document.getElementById('root'));


import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client'; // For modern React rendering
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

// Import components
import App from './App';
import Login from './Login';
import Dashboard from './Dashboard';

// Main component
const Main = () => {
  const [user, setUser] = useState(null); // State to track the logged-in user

  // Handle login - update the user state after successful login
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token); // Save token in localStorage
  };

  // Handle logout - reset user state and clear localStorage
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Routes>
        {/* Route for login page */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Route for dashboard, protected route */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard user={user} onLogout={handleLogout} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* Fallback route */}
        <Route path="*" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

// Attach the application to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);

