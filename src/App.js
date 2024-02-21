import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Review from './pages/Review';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navbar from './Navbar';


function NotFound() {
  return <h1>Page Not Found</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/review" element={<Review />} />
        <Route path="/skills" element={<Skills />} />
         <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
