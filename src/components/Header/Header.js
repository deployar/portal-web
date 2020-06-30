import React from 'react';
import './Header.css';
import rocket from '../../assets/rocket.svg'

export default function Header() {
  return (
    <header className="header">
      <div className='logo'>
        <img src={rocket} alt="rocket" />
        <span >DeployAR</span>
      </div>
      {/*   <nav className="nav">
        <a href='#'>Roadmaps</a>
        <a href='#'>FAQ</a>
      </nav> */}
    </header>
  );
}

