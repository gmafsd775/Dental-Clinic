import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope, Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Appointment from './pages/Appointment';
import Services from './pages/Services';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Appointment', path: '/appointment' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-xl flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] transition-all">
            <Stethoscope className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            BRIGHT<span className="text-neon-cyan neon-text-cyan">SMILE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-medium tracking-widest uppercase transition-all hover:text-neon-cyan ${
                location.pathname === link.path 
                  ? 'text-neon-cyan neon-text-cyan' 
                  : 'text-white/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/appointment" 
            className="bg-white text-black px-8 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-neon-cyan hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-bg border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold uppercase tracking-widest ${location.pathname === link.path ? 'text-neon-cyan' : 'text-white/60'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/appointment" 
                onClick={() => setIsOpen(false)}
                className="bg-neon-cyan text-black text-center py-4 rounded-xl font-black uppercase tracking-widest"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg flex items-center justify-center">
                <Stethoscope className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">BRIGHTSMILE</span>
            </Link>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Redefining dental care with futuristic technology and aesthetic precision. Join the revolution of modern smiles.
            </p>
            <div className="flex items-center gap-4 text-white/60">
              <Phone className="w-5 h-5 text-neon-cyan" />
              <span className="font-mono text-lg tracking-tighter">+923219088673</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.3em]">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/40 hover:text-neon-cyan transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-white/40 hover:text-neon-cyan transition-colors">Services</Link></li>
              <li><Link to="/appointment" className="text-white/40 hover:text-neon-cyan transition-colors">Appointment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.3em]">Operational</h4>
            <ul className="space-y-4 text-white/40 font-mono text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>MON - FRI</span> <span>09:00 - 18:00</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>SATURDAY</span> <span>10:00 - 16:00</span></li>
              <li className="flex justify-between"><span>SUNDAY</span> <span className="text-neon-purple">CLOSED</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-white/20 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} BrightSmile Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

