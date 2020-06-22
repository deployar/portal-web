import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className='logo'>
        <img src={require("../../assets/rocket.svg")} alt="rocket" />
        <span >DeployAR</span>
      </div>
      <nav className="nav">
        <a href='#'>Roadmaps</a>
        <a href='#'>FAQ</a>
      </nav>
    </header>
  );
}

