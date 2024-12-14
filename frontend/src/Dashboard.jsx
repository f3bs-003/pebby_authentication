import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { jwtDecode } from 'jwt-decode';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

import { API_ENDPOINT } from './Api';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  /* Verify if User In-Session in LocalStorage */
  useEffect(() => {
    const fetchDecodedUserID = async () => {
      try {
        const response = JSON.parse(localStorage.getItem('token'));
        setUser(response.data);

        const decoded_token = jwtDecode(response.data.token);
        setUser(decoded_token);
      } catch (error) {
        navigate("/login");
      }
    };
    fetchDecodedUserID();
  }, []);

  /* Performs Logout Method */
  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      navigate("/login");
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">X</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#users">For You</Nav.Link>
            <Nav.Link href="#departments">Following</Nav.Link>
          </Nav>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown
                title={user ? `User: ${user.username}` : 'Dropdown'}
                id="basic-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
// import axios from 'axios';

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Verify if user is logged in by decoding the token
//   useEffect(() => {
//     const fetchDecodedUser = () => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         try {
//           const decoded = jwtDecode(token);
//           setUser(decoded); // Store decoded token data in state
//         } catch (error) {
//           console.error("Invalid token:", error);
//           localStorage.removeItem('token');
//           navigate("/login");
//         }
//       } else {
//         navigate("/login");
//       }
//     };
//     fetchDecodedUser();
//   }, [navigate]);

//   // Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate("/login");
//   };

//   return (
//     <>
//       <Navbar bg="black" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand href="/">X</Navbar.Brand>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#users">For You</Nav.Link>
//               <Nav.Link href="#departments">Following</Nav.Link>
//             </Nav>
//             <Nav className="ms-auto">
//               <NavDropdown
//                 title={user ? `Hello, ${user.username}` : "User"}
//                 id="basic-nav-dropdown"
//                 align="end"
//               >
//                 <NavDropdown.Item href="#">Profile</NavDropdown.Item>
//                 <NavDropdown.Item href="#">Settings</NavDropdown.Item>
//                 <NavDropdown.Item onClick={handleLogout}>
//                   Logout
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Container className="mt-5">
//         <h3>Welcome to the Dashboard!</h3>
//         {user && (
//           <p>
//             Logged in as <strong>{user.username}</strong>
//           </p>
//         )}
//       </Container>
//     </>
//   );
// }

// export default Dashboard;



