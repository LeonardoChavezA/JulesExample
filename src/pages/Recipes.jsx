import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Search, ChevronDown } from 'lucide-react';

const recipesData = [
  {
    id: 1,
    title: "Tacos Al Pastor Tradicionales",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCphSs5cKa6GzmPOSgaa9N_7JVsjkebtba0kVJLaLbiB1oQBUNHkhhiZES5HomKWjfuvinx7wWRKzDxCmAVGOta3SI7-A95YpCKm_76AvwZdwEBffU1UI-dUlSIght90ROdEBH4b3CvMlu1GYMo9AUJSr_yMLogA5QNPdPsBuWdU2CuiCk-rxtO-AHOBHtKPP4g_HJ4pRt03ZqmDjPCA5UpDQU6Yqhb9ZbfcStaGwQdPUmef4xgTFueBBVsC0MubEwOZgIf5Ge-Fg",
    time: "30 min",
    difficulty: "Media",
    rating: 4.9,
    category: "Almuerzos"
  },
  {
    id: 2,
    title: "Enchiladas Verdes Suizas",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJouaXabsYiAO9tbtAnY4lA1NzRwcLqSlWmXnlncA4h6V2CuzqbWG9NaPQjqWqEK1l6qO29MepJ_ur5EGY8deumqtrqfPqKEJPZEWs47oarBuhXIEasEcOSwUr_4UcoGwyV3pbB2lm8CssFnPRrcXykGyXKMmT5A4jd-pELoY2nWXKFLTcZFQl666B5VT1UfjRP0bAGGzj_FCu4U9yxaNWC7oZivF6X_Rd5UFw-HdYPODFfZlv1Iy33PCswv-Wh1SoCBhyn_SYAA",
    time: "45 min",
    difficulty: "Fácil",
    rating: 4.7,
    category: "Almuerzos"
  },
  {
    id: 3,
    title: "Chilaquiles Rojos con Huevo",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbfZf2-tlOF_3KHkcifWbQf59sSr6jEiSuKuV0Arzbkv0Y_M_r1LQb0MgaYli0tAmriFzLSxgQ9nd5aD9hyZ1mkQNKbrvY0KyNWhsOga5_1A_NF7wthGrd7ZOTs5S8ErB0I6N6rQ_tgErySYBvhGDUohsdDbNuOA7DrMl4A9WRLf4pdkEunHSvD682OidVAPhfs5sVslTes1vci6Wp5_wbj1a67L8xfYaNi8BXQZugM5ZzyU2bQ5V0ZfhCxO42XdrH2HmeijiGaw",
    time: "20 min",
    difficulty: "Fácil",
    rating: 4.8,
    category: "Desayunos"
  },
  {
    id: 4,
    title: "Churros Caseros Crujientes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRFum4D_Wjyzjqdvw-deU74VoOdekRKXN0QlU3wSzrYQNwhKBH_Vg3C9jQgXjCYW0OUtjDhRqUkLA0xPK4Nt_1reGP3Ezi9zEV9ohXhePVMo0gD75q5krJ7vvjQfGzAy3k6qa8I6LRaKfJiQfEVrcLHEygEG4zrrz1yuQstwYpS9KcJS5t_nrHay8uiO15Ao11TEMGOY27_dzcD3dNLEpyH02AehK8zbR7yx7jSIlAaEqK1E02_46gaPJiYwZSixujrfzhwK2ppw",
    time: "40 min",
    difficulty: "Difícil",
    rating: 5.0,
    category: "Postres"
  },
  {
    id: 5,
    title: "Pozole Rojo Guerrero",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk6zId8uAfUxmL46xDSRnfmN8djWnHrwByvEeaGKa6XS-FYFOHlWT9JtmTsKPG2HH0_DlKT7jVyQ2UN8mQMUQl8wUNJY9ZQQQ5UeaYRUg0pwA2VqeNSYBH976CEQyetKnF07Ous0Fkg-i83ot2QP5l3vU55OPgh81Kl21BcBTS53tY9XGC44965v8fiSkMjchAJyZrVIi5cE1C5C2-pmXc_uXw_3gHETc-6H4KxkaTM0ju87ly8yJsLhm2u1z1HPHm0JtuE_cHbg",
    time: "120 min",
    difficulty: "Media",
    rating: 4.9,
    category: "Almuerzos"
  },
  {
    id: 6,
    title: "Mole Poblano Auténtico",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5M3pUBx0O-Ih8FZiflue--IrVrTHoL8b3NijEBWxNkL3XYPvOpY5qTuWz-96Mxa10siyLGLyO8kP54kVIl48c1FEieH0A7wOWYi-NFflsrbDnEbcYS4ekg0ELrHEHQhp5Dvne08m3ryXI_QEts6tmT0S2BW3gzM3CjE9pJppkTBNl8kKny9UtEfeuQYKDSxmAQZjlkcEVbp0YsKTrTp5FwUg4Rxc3F1DIduop1f_HjgkwBSgGBQ8ssIo_l2qSa0YWVT6p0D8wMg",
    time: "90 min",
    difficulty: "Difícil",
    rating: 4.6,
    category: "Almuerzos"
  },
  {
    id: 7,
    title: "Flan Napolitano Cremoso",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOh-hX9KaCS6ewqAux_Gc_u38m-Gw4fAeYxpZgJgcbs0gAlblI8MMQ-LjNBZ8UzUJzy-HjTCOBl15Dv9oqaz0fSZMx31PvfNQWc3NzeZo7le1I58MKlmr55nhp-S8M6bcAoNCNvAiK4Qt7aUkZoicINGJqmyhNjoeC8J8tzZKmCr-9saSA5QmFcYPXvNN-_lEBVQpngNq1T-8pQ-lcqYkPbuPKKgcAOnswmjvsLzKNql64ENURDzTNHgE1l9cfFoahbTBnsICdLA",
    time: "60 min",
    difficulty: "Fácil",
    rating: 4.8,
    category: "Postres"
  },
  {
    id: 8,
    title: "Sopa de Tortilla Crujiente",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1h0S_H1nPPaQapxbo05HFZxgdpURNHi4O91J1vOmagS8RtVjLoOj7bydWZcepSOK_RMG89TelRsE2-Ubi5YY-tXkkEDyrAR8aElTkPlVnyYfQNOiascxhv6mMLNwMfy38B3wkj7JnoLR9JABhMqhb3R3qJt-5eOYdfbcwQgu-9F11riA0wBbIyxrCD_sveELtMen5-W3CxTWHUmBTgOLxUzQRcT_LSzGL_2XslzHloXEDHmNImap8ETS8EmuSOl9NBFvMyrpH5Q",
    time: "35 min",
    difficulty: "Fácil",
    rating: 4.7,
    category: "Sopas"
  }
];

const categories = ["Todas", "Desayunos", "Almuerzos", "Postres", "Sopas"];

const Recipes = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredRecipes = activeCategory === "Todas"
    ? recipesData
    : recipesData.filter(recipe => recipe.category === activeCategory);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-20 pt-20 animate-fade-in">

      {/* Search Header */}
      <div className="px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div>
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">Explora nuestras <span className="text-primary">Recetas</span></h2>
             <p className="text-gray-600 dark:text-gray-400 mt-2">Tradición y sabor en cada bocado.</p>
        </div>
         <button className="p-3 bg-white dark:bg-white/5 rounded-full shadow-md text-gray-500 hover:text-primary transition-colors hover:scale-110 active:scale-95 transform">
            <Search size={24} />
         </button>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-3 overflow-x-auto px-6 pb-8 hide-scrollbar">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
                        activeCategory === cat
                        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                        : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    image={recipe.image}
                    title={recipe.title}
                    time={recipe.time}
                    difficulty={recipe.difficulty}
                    rating={recipe.rating}
                />
            ))}
        </div>

        {/* Load More */}
        <div className="mt-12 mb-6 px-6 max-w-md mx-auto">
            <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white active:scale-95 transition-all duration-300">
                Cargar más recetas
                <ChevronDown size={20} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
