import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-sans text-gray-900 dark:text-gray-100 selection:bg-primary/30">
        <Navbar />
        <main className="flex-grow pt-16"> {/* Add padding top to account for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recetas" element={<Recipes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
