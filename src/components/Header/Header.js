import React from 'react';
import './Header.css';
import rocket from '../../assets/rocket.svg';

export default function Header({ page, onNavigate }) {
  return (
    <header className="header">
      <button className='logo' type='button' onClick={() => onNavigate('home')}>
        <img src={rocket} alt="rocket" />
        <span>DeployAR</span>
      </button>
      <nav className="nav" aria-label="Navegación principal">
        <button
          className={page === 'jobs' ? 'active' : ''}
          type='button'
          onClick={() => onNavigate('jobs')}
        >
          Ofertas laborales
        </button>
      </nav>
    </header>
  );
}
