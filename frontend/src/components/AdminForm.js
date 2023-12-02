// AdminForm.js
import React, { useState } from 'react';

const AdminForm = ({ onSubmit }) => {
  const [post, setPost] = useState('');
  const [announcement, setAnnouncement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ post, announcement });
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Post:
        <input type="text" value={post} onChange={(e) => setPost(e.target.value)} />
      </label>
      <br />
      <label>
        Announcement:
        <input
          type="text"
          value={announcement}
          onChange={(e) => setAnnouncement(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdminForm;
