import './App.css';
import Header from './components/homepage/Header';
import Main from "./components/homepage/Main"
import Footer from './components/homepage/Footer';
import About from '../src/components/about/AboutHeader';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <div className='app'>
          <Header />
          <Routes>
            {/* Define routes for Main and About components */}
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
