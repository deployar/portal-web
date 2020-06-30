import React from 'react';
import './Footer.css';
import github from '../../assets/github.png'
import mail from '../../assets/mail.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'

export default function Footer() {
  return (
    <footer >
      <div className='links'>
        <a href='https://github.com/deployar'>
          <img src={github} alt="" />
        </a>
        <a href='https://github.com/deployar'>
          <img src={twitter} alt="" />
        </a>
        <a href='https://github.com/deployar'>
          <img src={facebook} alt="" />
        </a>
        <a href='mailto:gotodeployar@gmail.com'>
          <img src={mail} alt="" />
        </a>
      </div>
      <div className="copy">
        <span>Copyright 2020</span>
      </div>
    </footer>
  );
}

