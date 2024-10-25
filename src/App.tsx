import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import './App.css';

const AppContent: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </MantineProvider>
  );
};

export default App;