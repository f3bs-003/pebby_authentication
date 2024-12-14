// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.css";

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import { jwtDecode } from 'jwt-decode';

// import { API_ENDPOINT } from './Api';

// function Login() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   /* Verify if User In-Session in LocalStorage */
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = JSON.parse(localStorage.getItem('token'));
//         setUser(response.data);
//         navigate("/dashboard");
//       } catch (error) {
//         navigate("/login");
//       }
//     };
//     fetchUser();
//   }, []);

//   /* Performs Login Method */
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${API_ENDPOINT}/auth/login`, {
//         username,
//         password,
//       });
//       localStorage.setItem("token", JSON.stringify(response));
//       setError('');
//       navigate("/dashboard");
//     } catch (error) {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <>
//       <Navbar bg="black" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">X</Navbar.Brand>
//         </Container>
//       </Navbar>
//       <br /><br /><br /><br /><br /><br />
//       <Container>
//         <Row className="justify-content-md-center">
//           <Col md={4}>
//             <div className="login-form">
//               <div className="container">
//                 <div className="login-logo">
//                   {/* <img src={logo} width={'38%'} alt="Logo" /> */}
//                 </div>
//                 <center>
//                   Welcome! <br />
//                   Please enter the following.
//                 </center>
//                 &nbsp;
//                 <div className="card">
//                   <div className="card-body login-card-body">
//                     <Form onSubmit={handleSubmit}>
//                       <Form.Group controlId="formUsername">
//                         <Form.Label>Username:</Form.Label>
//                         <Form.Control
//                           className="form-control-sm rounded-0"
//                           type="username"
//                           placeholder="Enter Username"
//                           value={username}
//                           onChange={(e) => setUsername(e.target.value)}
//                           required
//                         />
//                       </Form.Group>
//                       <br />
//                       <Form.Group controlId="formPassword">
//                         <Form.Label>Password:</Form.Label>
//                         <Form.Control
//                           className="form-control-sm rounded-0"
//                           type="password"
//                           placeholder="Enter Password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                           required
//                         />
//                       </Form.Group>
//                       <br />
//                       <Form.Group controlId="formButton">
//                         {error && <p style={{ color: 'red' }}>{error}</p>}
//                         <Button
//                           variant="black"
//                           className="btn btn-block bg-custom btn-flat rounded-0"
//                           size="sm"
//                           block="block"
//                           type="submit"
//                         >
//                           L o g i n &nbsp; N o w
//                         </Button>
//                       </Form.Group>
//                     </Form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Login;

// import React, { useState } from 'react';
// import './Login.css';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Basic validation (expand based on your requirements)
//     if (!username || !password) {
//       setError('Both username and password are required');
//       return;
//     }

//     // Here, you would call an authentication API to verify the credentials
//     // For example, use Firebase auth, JWT, etc.
//     // Simulating login success with dummy data
//     if (username === 'user' && password === 'password123') {
//       onLogin({ username: 'user' }); // Mocking successful login
//     } else {
//       setError('Invalid credentials, please try again.');
//     }
//   };

//   return (
//     <div className="login">
//       <div className="login-container">
//         <h2>Login to X App</h2>
//         {error && <div className="error-message">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//             />
//           </div>
//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//           </div>
//           <button type="submit" className="login-btn">Log In</button>
//         </form>
//         <div className="signup-link">
//           <p>Don't have an account? <a href="/signup">Sign up</a></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Assuming the modern design styles are in Login.css

import { API_ENDPOINT } from './Api';

function Login() {
  const navigate = useNavigate();

  // State management
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Redirect if already logged in
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          navigate('/dashboard');
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, [navigate]);

  // Handle login submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both username and password are required');
      return;
    }

    try {
      const response = await axios.post(`${API_ENDPOINT}/auth/login`, {
        username,
        password,
      });
      const userToken = response.data.token;

      localStorage.setItem('token', userToken); // Store the token
      setToken(userToken);
      setError('');
      navigate('/dashboard'); // Redirect to dashboard
    } catch (err) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login to X App</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

