import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Utensils, Search, User, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-black/80 backdrop-blur-lg border-b border-primary/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <span className="text-primary p-1 rounded-md bg-primary/10">
            <Utensils size={24} />
          </span>
          <span className="font-bold text-xl tracking-tight text-primary font-display">Sabores de Casa</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium transition-colors">Inicio</Link>
          <Link to="/recetas" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium transition-colors">Recetas</Link>
          <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-4">
            <button className="text-gray-500 hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-500 hover:text-primary transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2 hover:bg-primary/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 shadow-xl py-6 flex flex-col items-center gap-6 animate-in slide-in-from-top-2 duration-200">
          <Link to="/" className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/recetas" className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary" onClick={() => setIsOpen(false)}>Recetas</Link>
          <div className="flex gap-6 pt-4 border-t border-gray-100 dark:border-gray-800 w-full justify-center">
            <button className="text-gray-500 hover:text-primary flex flex-col items-center gap-1">
              <Search size={20} />
              <span className="text-xs">Buscar</span>
            </button>
            <button className="text-gray-500 hover:text-primary flex flex-col items-center gap-1">
              <User size={20} />
              <span className="text-xs">Perfil</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
