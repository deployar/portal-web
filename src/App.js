import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <h1>DeployAR</h1>
        <h3>comunidad argentina</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt repellat animi architecto quia quis sit vero et amet excepturi ipsum! Ullam quae tempora, facilis optio officia nemo ducimus porro rerum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </main>
      <Footer />
    </div>
  );
}

