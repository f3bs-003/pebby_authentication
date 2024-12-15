// // import React, { useEffect, useState } from 'react';  
// // import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";  
// // import axios from 'axios';  
// // import Row from 'react-bootstrap/Row';  
// // import Col from 'react-bootstrap/Col';  
// // import "bootstrap/dist/css/bootstrap.css";  

// // import { API_ENDPOINT } from './Api';  

// // import Tab from 'react-bootstrap/Tab';  
// // import Tabs from 'react-bootstrap/Tabs';  
// // import NavDropdown from 'react-bootstrap/NavDropdown';  
// // import { Dropdown, DropdownButton } from 'react-bootstrap';  
// // import { Button } from 'react-bootstrap';  
// // import { useNavigate } from 'react-router-dom';  
// // import Navbar from 'react-bootstrap/Navbar';  
// // import Container from 'react-bootstrap/Container';  
// // import Nav from 'react-bootstrap/Nav';  
// // import { jwtDecode } from 'jwt-decode';  
// // import Form from 'react-bootstrap/Form';

// // import Dashboard from './Dashboard';  
// // import Login from './Login';  
// // function App() {  
// //   return (  
// //       <>  
// //           <Router>  
// //               <Row>  
// //                   <Col md={12}>  
// //                       <Routes>  
// //                           <Route path="/" element={<Login />} />  
// //                           <Route path="/login" element={<Login />} />  
// //                           <Route path="/dashboard" element={<Dashboard />} />  
// //                       </Routes>  
// //                   </Col>  
// //               </Row>  
// //           </Router>  
// //       </>  
// //   );  
// // }  

// // export default App;

// // import React, { useState, useEffect } from 'react';
// // import './App.css';

// // // Dummy data for posts (replace with API calls to get live data)
// // const postsData = [
// //   { id: 1, user: 'JohnDoe', content: 'This is my first post!', timestamp: '2024-12-14 09:00' },
// //   { id: 2, user: 'JaneSmith', content: 'Enjoying the new features of X app!', timestamp: '2024-12-14 10:15' },
// // ];

// // const App = () => {
// //   const [posts, setPosts] = useState(postsData);
// //   const [newPost, setNewPost] = useState('');
// //   const [user, setUser] = useState({ username: 'CurrentUser' });  // Mock user state, replace with real auth

// //   // Handle new post submission
// //   const handlePostSubmit = () => {
// //     if (newPost.trim()) {
// //       const newPostObj = {
// //         id: posts.length + 1,
// //         user: user.username,
// //         content: newPost,
// //         timestamp: new Date().toLocaleString(),
// //       };
// //       setPosts([newPostObj, ...posts]);
// //       setNewPost('');
// //     }
// //   };

// //   // Function to render the tweet list
// //   const renderPosts = () => {
// //     return posts.map(post => (
// //       <div key={post.id} className="post">
// //         <div className="post-header">
// //           <span className="username">{post.user}</span>
// //           <span className="timestamp">{post.timestamp}</span>
// //         </div>
// //         <div className="post-content">{post.content}</div>
// //       </div>
// //     ));
// //   };

// //   return (
// //     <div className="app">
// //       <header className="app-header">
// //         <h1>X App</h1>
// //         <div className="user-info">
// //           <span>Welcome, {user.username}</span>
// //         </div>
// //       </header>
// //       <main>
// //         {/* New Post Form */}
// //         <div className="new-post-form">
// //           <textarea
// //             value={newPost}
// //             onChange={(e) => setNewPost(e.target.value)}
// //             placeholder="What's happening?"
// //           />
// //           <button onClick={handlePostSubmit}>Post</button>
// //         </div>

// //         {/* Post List */}
// //         <div className="posts-list">
// //           {renderPosts()}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';
// import Dashboard from './Dashboard';
// import Login from './Login';

// // Dummy data for posts (replace with API calls for dynamic data)
// const postsData = [
//   { id: 1, user: 'JohnDoe', content: 'This is my first post!', timestamp: '2024-12-14 09:00' },
//   { id: 2, user: 'JaneSmith', content: 'Enjoying the new features of X app!', timestamp: '2024-12-14 10:15' },
// ];

// const App = () => {
//   const [posts, setPosts] = useState(postsData);
//   const [newPost, setNewPost] = useState('');
//   const [user, setUser] = useState(null); // Initially null, populated after login
//   const navigate = useNavigate();

//   // Simulate authentication check
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       const decodedUser = { username: 'CurrentUser' }; // Replace with `jwtDecode(token)` for actual use
//       setUser(decodedUser);
//     } else {
//       navigate('/login');
//     }
//   }, [navigate]);

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     navigate('/login');
//   };

//   // Handle new post submission
//   const handlePostSubmit = () => {
//     if (newPost.trim()) {
//       const newPostObj = {
//         id: posts.length + 1,
//         user: user?.username || 'Anonymous',
//         content: newPost,
//         timestamp: new Date().toLocaleString(),
//       };
//       setPosts([newPostObj, ...posts]);
//       setNewPost('');
//     }
//   };

//   // Function to render the posts
//   const renderPosts = () => {
//     return posts.map((post) => (
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
//     <Router>
//       <div className="app">
//         {/* Header */}
//         <header className="app-header">
//           <h1>X App</h1>
//           <div className="user-info">
//             {user ? (
//               <>
//                 <span>Welcome, {user.username}</span>
//                 <button className="btn-logout" onClick={handleLogout}>
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <span>Please log in</span>
//             )}
//           </div>
//         </header>

//         {/* Main Content */}
//         <main>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 user ? (
//                   <>
//                     {/* New Post Form */}
//                     <div className="new-post-form">
//                       <textarea
//                         value={newPost}
//                         onChange={(e) => setNewPost(e.target.value)}
//                         placeholder="What's happening?"
//                       />
//                       <button onClick={handlePostSubmit}>Post</button>
//                     </div>

//                     {/* Post List */}
//                     <div className="posts-list">{renderPosts()}</div>
//                   </>
//                 ) : (
//                   <Login />
//                 )
//               }
//             />
//             <Route path="/login" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../services/authService';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(fullname, username, password);
      history.push('/login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full Name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;




