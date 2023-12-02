// DisplayContent.js
import React from 'react';

const DisplayContent = ({ content }) => {
  return (
    <div>
      <h2>Posts and Announcements:</h2>
      <ul>
        {content.map((item, index) => (
          <li key={index}>
            <strong>Post:</strong> {item.post}, <strong>Announcement:</strong> {item.announcement}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayContent;
