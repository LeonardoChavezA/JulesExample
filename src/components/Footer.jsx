import React from 'react';
import { Facebook, Twitter, Instagram, Utensils } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/5 dark:bg-primary/10 border-t border-primary/20 px-6 py-12 space-y-8 mt-16">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center gap-2">
          <Utensils className="text-primary" size={24} />
          <span className="font-bold text-xl tracking-tight text-primary font-display">Sabores de Casa</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs leading-relaxed">
          Auténtica gastronomía letona, servida con amor y tradición desde 2024.
        </p>
      </div>

      <div className="flex justify-center gap-6">
        <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-background-dark flex items-center justify-center text-primary shadow-md hover:bg-primary hover:text-white transition-colors duration-300">
          <Facebook size={20} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-background-dark flex items-center justify-center text-primary shadow-md hover:bg-primary hover:text-white transition-colors duration-300">
          <Twitter size={20} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-background-dark flex items-center justify-center text-primary shadow-md hover:bg-primary hover:text-white transition-colors duration-300">
          <Instagram size={20} />
        </a>
      </div>

      <div className="pt-8 border-t border-primary/20 text-center text-[10px] uppercase tracking-widest text-gray-400 safe-area-bottom">
        © 2024 Sabores de Casa. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
