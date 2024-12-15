import React, { useState, useEffect } from 'react';
import Post from './Posts';
import api from '../api/Api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get('/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const deletePost = async (post_id) => {
    try {
      await api.delete(`/posts/${post_id}`);
      setPosts(posts.filter(post => post.post_id !== post_id));
    } catch (error) {
      console.error('Failed to delete post', error);
    }
  };

  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.post_id} post={post} onDelete={deletePost} />
      ))}
    </div>
  );
};

export default PostList;
