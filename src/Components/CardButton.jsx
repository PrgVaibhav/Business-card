import React from 'react';
import './CardButton.css';
function CardButton() {
  return (
    <div className="contact-btn">
      <button className="btn">
        <i class="fa-solid fa-envelope"></i>Email
      </button>
      <button className="btn linkedin">
        <i class="fa-brands fa-linkedin"></i>LinkedIn
      </button>
    </div>
  );
}

export default CardButton;
