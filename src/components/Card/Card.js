import React from 'react';

import './Card.css';

export default function Card({ href, title, src, alt, color, text1 }) {
  return (
    <a href={href} className={`${color} card-container`}>
      <h3>{title}</h3>
      <div className='card-content'>

        <div className='icon-container'>
          <img
            src={src}
            alt={alt}
            className='icon'
          />
        </div>
        <div className='text-container'>
          <p>
            {text1}
          </p>
        </div>
      </div>
    </a>
  );
}

