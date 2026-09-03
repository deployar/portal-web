import React, { useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import JobOffers from './components/JobOffers/JobOffers';

import './App.css';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <Header page={page} onNavigate={setPage} />
      {page === 'jobs' ? <JobOffers /> : <Main />}
      <Footer />
    </div>
  );
}
