// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import { jwtDecode } from 'jwt-decode';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import { FormControl, Dropdown, DropdownButton } from 'react-bootstrap';

// import { API_ENDPOINT } from './Api';

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   /* Verify if User In-Session in LocalStorage */
//   useEffect(() => {
//     const fetchDecodedUserID = async () => {
//       try {
//         const response = JSON.parse(localStorage.getItem('token'));
//         setUser(response.data);

//         const decoded_token = jwtDecode(response.data.token);
//         setUser(decoded_token);
//       } catch (error) {
//         navigate("/login");
//       }
//     };
//     fetchDecodedUserID();
//   }, []);

//   /* Performs Logout Method */
//   const handleLogout = async () => {
//     try {
//       localStorage.removeItem('token');
//       navigate("/login");
//     } catch (error) {
//       console.error('Logout failed', error);
//     }
//   };

//   return (
//     <>
//       <Navbar bg="black" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">X</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#users">For You</Nav.Link>
//             <Nav.Link href="#departments">Following</Nav.Link>
//           </Nav>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <NavDropdown
//                 title={user ? `User: ${user.username}` : 'Dropdown'}
//                 id="basic-nav-dropdown"
//                 align="end"
//               >
//                 <NavDropdown.Item href="#">Profile</NavDropdown.Item>
//                 <NavDropdown.Item href="#">Settings</NavDropdown.Item>
//                 <NavDropdown.Item href="#" onClick={handleLogout}>
//                   Logout
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';

// // Dummy data for posts and trends (replace with API calls for dynamic content)
// const postsData = [
//   { id: 1, user: 'JohnDoe', content: 'This is my first post!', timestamp: '2024-12-14 09:00' },
//   { id: 2, user: 'JaneSmith', content: 'Loving the new update of X app!', timestamp: '2024-12-14 10:15' },
// ];

// const trendingTopics = ['#ReactJS', '#JavaScript', '#WebDevelopment', '#AI', '#XAppUpdate'];

// const Dashboard = ({ user }) => {
//   const [posts, setPosts] = useState(postsData);

//   // Function to render the posts list
//   const renderPosts = () => {
//     return posts.map(post => (
//       <div key={post.id} className="post">
//         <div className="post-header">
//           <span className="username">{post.user}</span>
//           <span className="timestamp">{post.timestamp}</span>
//         </div>
//         <div className="post-content">{post.content}</div>
//       </div>
//     ));
//   };

//   return (
//     <div className="dashboard">
//       <div className="dashboard-sidebar">
//         <div className="profile-section">
//           <img src={`https://api.adorable.io/avatars/150/${user.username}.png`} alt="Profile" className="profile-img" />
//           <div className="profile-info">
//             <h2>{user.username}</h2>
//             <p>{user.bio || 'No bio available.'}</p>
//             <button className="btn-follow">Edit Profile</button>
//           </div>
//         </div>
//         <div className="trending-section">
//           <h3>Trending</h3>
//           <ul>
//             {trendingTopics.map((topic, index) => (
//               <li key={index}>
//                 <a href={`https://xapp.com/search?q=${topic}`} className="trending-topic">{topic}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       <div className="dashboard-main">
//         <h1>Welcome to your Dashboard</h1>
//         <div className="timeline">
//           <h2>Your Timeline</h2>
//           <div className="posts-list">
//             {renderPosts()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import './Dashboard.css';

// Dummy data for posts and trends (replace with API calls for dynamic content)
const postsData = [
  { id: 1, user: 'JohnDoe', content: 'This is my first post!', timestamp: '2024-12-14 09:00' },
  { id: 2, user: 'JaneSmith', content: 'Loving the new update of X app!', timestamp: '2024-12-14 10:15' },
];

const trendingTopics = ['#ReactJS', '#JavaScript', '#WebDevelopment', '#AI', '#XAppUpdate'];

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(postsData); // Replace with API calls
  const navigate = useNavigate();

  // Verify if User In-Session in LocalStorage
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        navigate('/login');
      }
    };
    fetchUserData();
  }, [navigate]);

  // Perform Logout Method
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // Function to render posts
  const renderPosts = () => {
    return posts.map((post) => (
      <div key={post.id} className="post">
        <div className="post-header">
          <span className="username">{post.user}</span>
          <span className="timestamp">{post.timestamp}</span>
        </div>
        <div className="post-content">{post.content}</div>
      </div>
    ));
  };

  if (!user) {
    return null; // Optionally, show a loading spinner here
  }

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="profile-section">
          <img
            src={`https://api.adorable.io/avatars/150/${user.username}.png`}
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-info">
            <h2>{user.username}</h2>
            <p>{user.bio || 'No bio available.'}</p>
            <button className="btn-follow">Edit Profile</button>
          </div>
        </div>
        <div className="trending-section">
          <h3>Trending</h3>
          <ul>
            {trendingTopics.map((topic, index) => (
              <li key={index}>
                <a href={`https://xapp.com/search?q=${topic}`} className="trending-topic">
                  {topic}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <div className="dashboard-navbar">
          <h1>Welcome, {user.username}</h1>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="timeline">
          <h2>Your Timeline</h2>
          <div className="posts-list">{renderPosts()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


