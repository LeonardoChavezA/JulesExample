import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9HkzYzV0JO8ypVuKlqDZphIA3GOSZLlgWpejv-lN1ziuyetOi-G9fsqldNhjnLouMid4Rd0Rrfady6L6n4FZo7t8eQ-xS0yoZhsfvPkXqDqvVaS_j2B5F2Se0oAdzNvp7teqSaWWZUfLLH3nOSRaRLfm9DRn9HdDgIH1OSqswP_5OvAhPhzEyYkv6APp-3wNXWKcEvwj9KvDczMtUdUweJJNjHiVecXUxl9Z_-xEVvqIJ4r3VsFpngdrqUubHFGTBR3ttvJNZQA"
          alt="Sabores de Letonia"
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 pb-24 md:pb-32 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <div className="inline-block backdrop-blur-md bg-white/10 border border-white/20 px-4 py-2 rounded-full shadow-lg">
            <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Tradición Báltica
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight font-display drop-shadow-2xl">
            El corazón de <span className="text-primary">Letonia</span> en tu mesa.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed drop-shadow-md">
            Descubre los sabores ancestrales y la calidez del hogar letón, traídos directamente desde el Báltico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-primary hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 text-lg">
              Reservar Mesa
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold py-4 px-8 rounded-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 text-lg">
              Ver Menú <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
