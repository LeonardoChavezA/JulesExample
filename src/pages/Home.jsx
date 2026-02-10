import React from 'react';
import Hero from '../components/Hero';
import RecipeCard from '../components/RecipeCard';
import { MapPin, Phone, Mail, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <Hero />

      {/* Announcement */}
      <section className="px-6 -mt-20 relative z-20 max-w-7xl mx-auto">
        <div className="glass-morphism bg-white/60 dark:bg-black/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/40 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-8 animate-fade-in-up delay-100">
            <div className="space-y-4">
                 <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20">Inauguración</div>
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white font-display">Próxima apertura</h2>
                 <p className="text-sm text-gray-600 dark:text-gray-300 italic">Un San Valentín inolvidable te espera.</p>
            </div>

            <div className="flex gap-8 text-primary font-bold text-4xl font-display">
                <div className="flex flex-col items-center">
                    <span>14</span>
                    <span className="text-[10px] uppercase text-gray-500 font-sans tracking-widest mt-1">Febrero</span>
                </div>
                <span className="text-gray-300 font-light">|</span>
                <div className="flex flex-col items-center">
                    <span>20</span>
                    <span className="text-[10px] uppercase text-gray-500 font-sans tracking-widest mt-1">24</span>
                </div>
            </div>
             <button className="bg-primary hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
                <Calendar size={18} /> Reservar
            </button>
        </div>
      </section>

      {/* About Us */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <div className="w-16 h-1.5 bg-primary rounded-full"></div>
            <h3 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white font-display">Nuestra Historia</h3>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Traemos las recetas de nuestras abuelas desde las costas del Báltico hasta tu paladar. Ingredientes ahumados, granos ancestrales y el alma de Riga en cada bocado.
            </p>
            <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform group">
                Conoce más <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
             <img className="rounded-2xl shadow-lg transform translate-y-8 hover:-translate-y-2 transition-transform duration-500 border border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApUCI9RZayhaI6VCq9g9vAd4S0okPA4fPKHxiSQ3Z11aD7AEBSKPvRrJ9k6rqGzJ8Zkszf6z8-Fi3Yg8yfzgn8xwyidbj4HwLEztp9_VzfBwF4GmSbY8jmOsb-m8QmB5JkJsY4wlRhHZj_5fTgK9_776Xw9kx-GxXY_z8puTrVJRuVNR_lvaBd_X02i48_vFPuN1CFQ8GjK4azg1Ai7FDlXqapdWfMYkaLjZdC5t0e4BAnndodc3fjM2Qwcw3pLUqqkcF83F1XQA" alt="Cocina tradicional" loading="lazy" />
             <img className="rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-500 border border-white/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZMtXPuKCE1_7AYYqW--g1AZOQeYslnDBCyahKR5savs_fswmuxkIxmggM8axE_z8SC-vThuxmjLEt6PaHs3e5AwhtzpltasktjlTTbBmpgWi17kgMhkKoOH6w18HyG2B2MDwr_zZILKH9fHbhXjyAcb3QCWDkKM7dPBK577TjyCnBA6hrPHM1bJscDpNwgE-G31xajz7jx_4XGAMjHS7YrRlEMRH_vTK20fcgLf8U885wpvNJbvt9GiuL8dUFbbdKaZVtPVLFrA" alt="Ingredientes frescos" loading="lazy" />
        </div>
      </section>

      {/* Top Recipes */}
      <section className="bg-primary/5 py-20 px-6">
        <div className="max-w-7xl mx-auto">
             <div className="flex justify-between items-end mb-12">
                <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-display">Recetas Estrella</h3>
                    <p className="text-gray-500">Los platos favoritos de nuestros clientes</p>
                </div>
                <Link to="/recetas" className="text-primary font-bold text-sm hover:underline flex items-center gap-1 group">
                  Ver menú <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RecipeCard
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuAis7dWmEsDxDVSrIyMy12GIHUXqeaolZ1DOM4UrfwBLjIVJHpbEWZhhDUC3uV4xPKs3UsLBgKKxNQbgWBrc0MFUXUJgBV4h2iBhZOpJm8MI07bB_gkTUzt_a2qjDNvr7yXlhK1dSqX6cv4fLIrVdQnaL-H0-LPzmYHBiAsuSXJHxqa169tq_yLNtAh35bH0y9uoVs-FVPhVfGg4VPFqQJNUjOgrXDm2h2T85akWc2VbtFP8Iasz3pAz008LG5R4hSmfnSBYNw2Yg"
                    title="Speķa pīrāgi"
                    description="Delicados bollos de masa fermentada rellenos de panceta ahumada y cebolla."
                    featured={true}
                    rating={4.9}
                />
                 <RecipeCard
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuDvotW62Dd5xcxjWwm-2UrvqxA77BHAlmDJW3ASNxzLXNRIXpE-cN95vnqO0BR1pHPfti4n1lU11bdfeeVO98B8hsBb17zcbOydZz5NXT9mC27w-Ug4Hn6HI0-pe7DJbHmwjq8PLWNvFCC8IIAQNiHWadYjxmTMaWfOvvXCQQ95cGAxO9hRAtOu0kfeIo6W8ctorT1Bk4Ggb0rI0MNxFgQBG2hbIZJYYVoKtUcU21uT6on2JUlEJER-GgKTa5YOlZHht90rLq4LFQ"
                    title="Zirņi ar speķi"
                    description="El plato nacional: guisantes grises cocidos a fuego lento con tocino y kefir."
                    featured={false}
                    rating={4.7}
                />
                 <RecipeCard
                    image="https://lh3.googleusercontent.com/aida-public/AB6AXuCUNEcdf4QuZL-ywiuXqc7fimoX5iGafRphtHScWj9xGrim40ZiXXihZt1JbmoV8fXhHOHx7a-MgZjRrw3dbkCoy7v5tYjAjRv90SDGSSmCZ4gkom72FbA3LR8Dv8lunyBEu6czP-QR7iBUovIjLV8PJ-dUgEGpDXkZTsIETA6xIeH9gejBSMcxTY57uc3dQpiQE9gGjxhf9jU8AuTsLTfjdQZ_3Bg_41ZS6V2OryWCYSk4ePy_vMerTvagxq1VMkdRYDSvBqeJvQ"
                    title="Rupjmaizes kārtojums"
                    description="Postre de capas de pan de centeno tostado, nata montada y mermelada de arándanos."
                    featured={false}
                    rating={4.8}
                />
            </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-6 py-20 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white font-display">¿Dónde encontrarnos?</h3>
            <p className="text-gray-500 dark:text-gray-400">Te esperamos en el corazón de la ciudad.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-auto relative border-4 border-white dark:border-background-dark group">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUpwaDBs9w9kt3KQSovW7eD8Fc5frovDtK3VxeZwZWPEq3KEU47GTlGUCikrVhN3dCVvmw7uCtWQjCu5V_yiI4haHmzey6uVpROtmvllaE87863jJPgAXQ84j6wm44SDFFznviR-9rmmbdIMZWAWHmj_NbpOrAyeGyaes3Jha4DBuJZtDdZDe1Iu8EytFccQ5GT42a8q_WyAQXKxGWcao1H9LAhQaWuytgzHKrXGLu3VnZiefaXrxD7ZklmW1a4cz5wmZEmrXXWw" alt="Mapa Riga" loading="lazy" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-primary text-white p-4 rounded-full shadow-lg animate-bounce">
                        <MapPin size={32} />
                    </div>
                </div>
            </div>

            <div className="space-y-6 flex flex-col justify-center">
                 <div className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-background-dark shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-800">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Phone size={24} />
                    </div>
                    <div>
                        <p className="text-xs uppercase text-gray-400 font-bold tracking-wider">Llámanos</p>
                        <p className="font-bold text-lg text-gray-900 dark:text-white">+34 900 123 456</p>
                    </div>
                </div>

                 <div className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-background-dark shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 dark:border-gray-800">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="text-xs uppercase text-gray-400 font-bold tracking-wider">Escríbenos</p>
                        <p className="font-bold text-lg text-gray-900 dark:text-white">hola@saboresdecasa.com</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-background-dark text-background-light p-8 md:p-16 relative overflow-hidden text-center space-y-8 shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h3 className="text-3xl font-bold font-display">Sé el primero en probarlo</h3>
                <p className="text-white/60 text-lg">Suscríbete para recibir una invitación exclusiva a nuestra pre-apertura y descuentos especiales.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input type="email" placeholder="Tu correo electrónico" className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95">
                        Suscribirme
                    </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
