import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { jwtDecode } from 'jwt-decode';

import { API_ENDPOINT } from './Api';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  /* Verify if User In-Session in LocalStorage */
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = JSON.parse(localStorage.getItem('token'));
        setUser(response.data);
        navigate("/dashboard");
      } catch (error) {
        navigate("/login");
      }
    };
    fetchUser();
  }, []);

  /* Performs Login Method */
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_ENDPOINT}/auth/login`, {
        username,
        password,
      });
      localStorage.setItem("token", JSON.stringify(response));
      setError('');
      navigate("/dashboard");
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <Navbar bg="black" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">X</Navbar.Brand>
        </Container>
      </Navbar>
      <br /><br /><br /><br /><br /><br />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <div className="login-form">
              <div className="container">
                <div className="login-logo">
                  {/* <img src={logo} width={'38%'} alt="Logo" /> */}
                </div>
                <center>
                  Welcome! <br />
                  Please enter the following.
                </center>
                &nbsp;
                <div className="card">
                  <div className="card-body login-card-body">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                          className="form-control-sm rounded-0"
                          type="username"
                          placeholder="Enter Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <br />
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                          className="form-control-sm rounded-0"
                          type="password"
                          placeholder="Enter Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </Form.Group>
                      <br />
                      <Form.Group controlId="formButton">
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <Button
                          variant="black"
                          className="btn btn-block bg-custom btn-flat rounded-0"
                          size="sm"
                          block="block"
                          type="submit"
                        >
                          L o g i n &nbsp; N o w
                        </Button>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.css";

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// import { API_ENDPOINT } from './Api';

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   /* Redirect if already logged in */
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       navigate('/dashboard');
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await axios.post(`${API_ENDPOINT}/auth/login`, {
//         username,
//         password,
//       });

//       localStorage.setItem('token', JSON.stringify(response.data.token));
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Invalid username or password');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
//         <Container>
//           <Navbar.Brand href="/">X App</Navbar.Brand>
//         </Container>
//       </Navbar>

//       {/* Main Content */}
//       <Container className="mt-5">
//         <Row className="justify-content-center">
//           <Col md={6} lg={4}>
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h4 className="text-center mb-3">Welcome Back</h4>
//                 <p className="text-center text-muted">Please login to your account</p>

//                 <Form onSubmit={handleSubmit}>
//                   <Form.Group className="mb-3" controlId="formUsername">
//                     <Form.Label>Username</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Enter your username"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       required
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder="Enter your password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                     />
//                   </Form.Group>

//                   {error && <p className="text-danger text-center">{error}</p>}

//                   <Button
//                     variant="primary"
//                     type="submit"
//                     className="w-100"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? 'Logging in...' : 'Login'}
//                   </Button>
//                 </Form>

//                 <div className="text-center mt-3">
//                   <a href="/forgot-password" className="text-decoration-none">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* Footer */}
//       <footer className="text-center text-muted py-3">
//         &copy; {new Date().getFullYear()} X App. All rights reserved.
//       </footer>
//     </>
//   );
// }

// export default Login;


