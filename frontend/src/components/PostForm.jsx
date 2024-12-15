import React, { useState } from 'react';
import api from '../api/Api';

const PostForm = () => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user_id = localStorage.getItem('user_id');
      await api.post('/posts', { user_id, caption, image });
      setCaption('');
      setImage('');
    } catch (error) {
      console.error('Failed to create post', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
