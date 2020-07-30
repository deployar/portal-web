import React from 'react';
import './Footer.css';
import github from '../../assets/github.png'
import mail from '../../assets/mail.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

export default function Footer() {
  return (
    <footer >
      <div className='links'>
        <a href='https://www.instagram.com/godeployar'>
          <img src={instagram} alt="instagram link" />
        </a>
        <a href='https://github.com/deployar'>
          <img src={github} alt="github link" />
        </a>
        <a href='https://twitter.com/GoDeployAr?s=20'>
          <img src={twitter} alt="twitter link" />
        </a>
        <a href='https://www.facebook.com/groups/deployar'>
          <img src={facebook} alt="facebook link" />
        </a>
        <a href='mailto:gotodeployar@gmail.com'>
          <img src={mail} alt="mail link" />
        </a>
      </div>
      <div className="copy">
        <span>Copyright 2020</span>
      </div>
    </footer>
  );
}

