// Fichero src/components/App.jsx
import '../../scss/App.scss';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Introduction from '../Introduction/Introduction';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const App = () => {
  return (
    <div className="body">
      <Header />
      <main className="main">
        <Introduction />
        <Projects />
        <Skills />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
};

export default App;
