import React from 'react';

const Post = ({ post, onDelete }) => {
  return (
    <div className="post">
      <img src={post.image} alt="Post" />
      <p>{post.caption}</p>
      <small>Posted by {post.username}</small>
      <button onClick={() => onDelete(post.post_id)}>Delete</button>
    </div>
  );
};

export default Post;
