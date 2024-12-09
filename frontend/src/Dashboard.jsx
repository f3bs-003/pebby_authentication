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
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.css";

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// const API_BASE = 'http://localhost:5000/api';

// function Dashboard() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [departments, setDepartments] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [students, setStudents] = useState([]);

//   /* Verify authentication and fetch user */
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     } else {
//       axios
//         .get(`${API_BASE}/auth/me`, {
//           headers: { Authorization: `Bearer ${JSON.parse(token)}` },
//         })
//         .then((response) => setUser(response.data))
//         .catch(() => {
//           localStorage.removeItem('token');
//           navigate('/login');
//         });
//     }
//   }, [navigate]);

//   /* Fetch dashboard data */
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [usersRes, deptRes, courseRes, studentRes] = await Promise.all([
//           axios.get(`${API_BASE}/users`, {
//             headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
//           }),
//           axios.get(`${API_BASE}/departments`),
//           axios.get(`${API_BASE}/courses`),
//           axios.get(`${API_BASE}/students`),
//         ]);
//         setUsers(usersRes.data);
//         setDepartments(deptRes.data);
//         setCourses(courseRes.data);
//         setStudents(studentRes.data);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   /* Handle Logout */
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
//         <Container>
//           <Navbar.Brand href="/">Dashboard</Navbar.Brand>
//           <Nav className="ml-auto">
//             <Nav.Item>
//               <Button variant="outline-light" onClick={handleLogout}>
//                 Logout
//               </Button>
//             </Nav.Item>
//           </Nav>
//         </Container>
//       </Navbar>

//       {/* Dashboard Content */}
//       <Container className="mt-5">
//         <Row>
//           <Col>
//             <h1 className="text-center">Welcome, {user ? user.name : 'User'}!</h1>
//             <p className="text-center text-muted">
//               Overview of users, departments, courses, and students.
//             </p>
//           </Col>
//         </Row>
//         <Row className="mt-4">
//           <Col md={3}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>Users</Card.Title>
//                 <Card.Text>Total: {users.length}</Card.Text>
//                 <Button variant="primary" onClick={() => navigate('/users')}>
//                   View Users
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={3}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>Departments</Card.Title>
//                 <Card.Text>Total: {departments.length}</Card.Text>
//                 <Button variant="primary" onClick={() => navigate('/departments')}>
//                   View Departments
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={3}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>Courses</Card.Title>
//                 <Card.Text>Total: {courses.length}</Card.Text>
//                 <Button variant="primary" onClick={() => navigate('/courses')}>
//                   View Courses
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={3}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>Students</Card.Title>
//                 <Card.Text>Total: {students.length}</Card.Text>
//                 <Button variant="primary" onClick={() => navigate('/students')}>
//                   View Students
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Footer */}
//       <footer className="text-center text-muted py-3">
//         &copy; {new Date().getFullYear()} Dashboard. All rights reserved.
//       </footer>
//     </>
//   );
// }

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.css";

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// const API_BASE = 'http://localhost:5000/api';

// function Dashboard() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [tweets, setTweets] = useState([]);
//   const [followers, setFollowers] = useState([]);
//   const [following, setFollowing] = useState([]);
//   const [users, setUsers] = useState([]);

//   /* Verify authentication and fetch user data */
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//     } else {
//       axios
//         .get(`${API_BASE}/auth/me`, {
//           headers: { Authorization: `Bearer ${JSON.parse(token)}` },
//         })
//         .then((response) => setUser(response.data))
//         .catch(() => {
//           localStorage.removeItem('token');
//           navigate('/login');
//         });
//     }
//   }, [navigate]);

//   /* Fetch user's tweets, followers, and following */
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [tweetsRes, followersRes, followingRes, usersRes] = await Promise.all([
//           axios.get(`${API_BASE}/tweets`, {
//             headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
//           }),
//           axios.get(`${API_BASE}/followers`, {
//             headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
//           }),
//           axios.get(`${API_BASE}/following`, {
//             headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
//           }),
//           axios.get(`${API_BASE}/users`, {
//             headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}` },
//           }),
//         ]);
//         setTweets(tweetsRes.data);
//         setFollowers(followersRes.data);
//         setFollowing(followingRes.data);
//         setUsers(usersRes.data);
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   /* Handle Logout */
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
//         <Container>
//           <Navbar.Brand href="/">X App</Navbar.Brand>
//           <Nav className="ml-auto">
//             <Nav.Item>
//               <Button variant="outline-light" onClick={handleLogout}>
//                 Logout
//               </Button>
//             </Nav.Item>
//           </Nav>
//         </Container>
//       </Navbar>

//       {/* Dashboard Content */}
//       <Container className="mt-5">
//         <Row>
//           <Col>
//             <h1 className="text-center">Welcome, {user ? user.name : 'User'}!</h1>
//             <p className="text-center text-muted">
//               Overview of your tweets, followers, following, and users.
//             </p>
//           </Col>
//         </Row>

//         {/* User Stats */}
//         <Row className="mt-4">
//           <Col md={4}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>Your Tweets</Card.Title>
//                 <Card.Text>Total: {tweets.length}</Card.Text>
//                 <Button variant="primary" onClick={() => navigate('/tweets')}>
//                   View Tweets
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>Followers</Card.Title>
//                 <Card.Text>Total: {followers.length}</Card.Text>
//                 <Button variant="primary" onClick={() => navigate('/followers')}>
//                   View Followers
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="shadow-sm">
//               <Card.Body>
//                 <Card.Title>Following</Card.Title>
//                 <Card.Text>Total: {following.length}</Card.Text>
//                 <Button variant="primary" onClick={() => navigate('/following')}>
//                   View Following
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>

//         {/* Recent Tweets */}
//         <Row className="mt-5">
//           <Col>
//             <h4>Recent Tweets</h4>
//             {tweets.length > 0 ? (
//               tweets.map((tweet) => (
//                 <Card key={tweet.id} className="mb-3">
//                   <Card.Body>
//                     <Card.Text>{tweet.content}</Card.Text>
//                     <footer className="blockquote-footer">
//                       {tweet.createdAt}
//                     </footer>
//                   </Card.Body>
//                 </Card>
//               ))
//             ) : (
//               <p>No tweets available.</p>
//             )}
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

// export default Dashboard;

