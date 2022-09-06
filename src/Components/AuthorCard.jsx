import React from 'react';
import './AuthorCard.css';

function AuthorCard() {
  return (
    <div className="author">
      <h1 className="author-title">Laura Smith</h1>
      <h5 className="author-job">Frontend Developer</h5>
      <h5 className="author-website">laurasmith.website</h5>
    </div>
  );
}

export default AuthorCard;
