import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer >
      <div className='links'>
        <a href='mailto:gotodeployar@gmail.com'>Email</a>
        <a href='https://github.com/deployar'>Github</a>
      </div>
      <div className="copy">
        <span>Copyrigth 2020</span>
      </div>
    </footer>
  );
}

