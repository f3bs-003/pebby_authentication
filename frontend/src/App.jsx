import React, { useEffect, useState } from 'react';  
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";  
import axios from 'axios';  
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import "bootstrap/dist/css/bootstrap.css";  

import { API_ENDPOINT } from './Api';  

import Tab from 'react-bootstrap/Tab';  
import Tabs from 'react-bootstrap/Tabs';  
import NavDropdown from 'react-bootstrap/NavDropdown';  
import { Dropdown, DropdownButton } from 'react-bootstrap';  
import { Button } from 'react-bootstrap';  
import { useNavigate } from 'react-router-dom';  
import Navbar from 'react-bootstrap/Navbar';  
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';  
import { jwtDecode } from 'jwt-decode';  
import Form from 'react-bootstrap/Form';

import Dashboard from './Dashboard';  
import Login from './Login';  
function App() {  
  return (  
      <>  
          <Router>  
              <Row>  
                  <Col md={12}>  
                      <Routes>  
                          <Route path="/" element={<Login />} />  
                          <Route path="/login" element={<Login />} />  
                          <Route path="/dashboard" element={<Dashboard />} />  
                      </Routes>  
                  </Col>  
              </Row>  
          </Router>  
      </>  
  );  
}  

export default App;

// import React from 'react';   
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
// import Row from 'react-bootstrap/Row';  
// import Col from 'react-bootstrap/Col';  
// import "bootstrap/dist/css/bootstrap.css";  

// import Dashboard from './Dashboard';  
// import Login from './Login';  

// // Protect Route Wrapper
// const ProtectedRoute = ({ element }) => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     // Redirect to login if no token exists
//     return <Login />;
//   }

//   // Decode the token to check if it's valid
//   try {
//     jwtDecode(token);  // This will throw an error if the token is invalid
//     return element; // If token is valid, render the element
//   } catch (error) {
//     localStorage.removeItem('token'); // Invalid token, clear from local storage
//     return <Login />;
//   }
// };

// function App() {  
//   return (  
//       <>  
//           <Router>  
//               <Row>  
//                   <Col md={12}>  
//                       <Routes>  
//                           <Route path="/" element={<Login />} />  
//                           <Route path="/login" element={<Login />} />  
//                           {/* Protected Route for Dashboard */}
//                           <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />  
//                       </Routes>  
//                   </Col>  
//               </Row>  
//           </Router>  
//       </>  
//   );  
// }  

// export default App;
