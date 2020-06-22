import React from 'react';

import './Card.css';

export default function Card({ href, title, src, alt, color }) {
  return (
    <a href={href} className={`${color} card`}>
      <div className='title-container'>
        <h3>{title}</h3>
        <img src={src} alt={alt} className='icon' />
      </div>
      <div className='description-container'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
    </a>
  );
}

