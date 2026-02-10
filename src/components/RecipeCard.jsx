import React from 'react';
import { Clock, BarChart, Star, ArrowRight } from 'lucide-react';

const RecipeCard = ({ image, title, description, time, difficulty, rating, featured }) => {
  return (
    <div className="group bg-white dark:bg-background-dark rounded-2xl overflow-hidden shadow-xl border border-primary/10 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
      <div className="h-56 relative overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {rating && (
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm z-10">
            <Star className="text-primary fill-primary" size={12} />
            <span className="text-xs font-bold text-gray-800 dark:text-white">{rating}</span>
          </div>
        )}

        {featured && (
           <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-primary shadow-sm z-10 uppercase tracking-wide">
             Favorito
           </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-3">
          {(time || difficulty) && (
             <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
               {time && <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md"><Clock size={14} className="text-primary" /> {time}</span>}
               {difficulty && <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md"><BarChart size={14} className="text-primary" /> {difficulty}</span>}
             </div>
          )}

          <div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-tight">{title}</h3>
            {description && <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">{description}</p>}
          </div>
        </div>

        <button className="w-full py-3 mt-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-red-600 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20">
          Ver Receta
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
