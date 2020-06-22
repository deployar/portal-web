import React from 'react';

import './Card.css';

export default function Card({ href, title, src, alt, color }) {
  return (
    <a href={href} className={`${color} card`}>
      <h3>{title}</h3>
      <div className='container'>
        <img
          src={src}
          alt={alt}
          className='icon'
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
    </a>
  );
}

