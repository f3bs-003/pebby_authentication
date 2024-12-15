import React from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <PostForm />
      <PostList />
    </div>
  );
};

export default Home;
