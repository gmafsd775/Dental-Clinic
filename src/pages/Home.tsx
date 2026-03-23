import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-32 pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000" 
            alt="Futuristic Dental Lab" 
            className="w-full h-full object-cover opacity-40 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan text-xs font-mono tracking-[0.3em] uppercase mb-8 bg-neon-cyan/5">
              Next-Gen Dental Care
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
              Precision <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple neon-text-cyan">Aesthetics</span>
            </h1>
            <p className="text-xl text-white/50 mb-12 max-w-lg font-light leading-relaxed">
              Where high-tech engineering meets clinical excellence. Experience the future of oral health.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/appointment" 
                className="bg-neon-cyan text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] transition-all flex items-center gap-3"
              >
                Book Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="glass text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10"
              >
                Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Neon Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-cyan/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-neon-purple/10 blur-[100px] rounded-full animate-pulse delay-700"></div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: ShieldCheck, title: "CYBER SECURITY", desc: "Your medical data is encrypted with military-grade protocols.", color: "neon-cyan" },
            { icon: Clock, title: "24/7 MONITORING", desc: "Real-time health tracking and emergency response systems.", color: "neon-purple" },
            { icon: Award, title: "ELITE SURGEONS", desc: "The top 1% of dental professionals globally, at your service.", color: "neon-pink" }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-3xl glass border border-white/5 hover:border-neon-cyan/30 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-8 h-8 text-neon-cyan`} />
              </div>
              <h3 className="text-xl font-black mb-4 tracking-widest uppercase">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Visual Section */}
      <section className="container mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden h-[600px] group">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000" 
            alt="Advanced Tech" 
            className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-none mb-4">
                The Lab <span className="text-neon-purple neon-text-purple">01</span>
              </h2>
              <p className="text-white/60 text-lg font-light">
                Our facilities are equipped with the world's most advanced robotic dental assistants and 3D printing labs.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-full glass flex items-center justify-center border border-white/10">
                <span className="font-mono text-neon-cyan">8K</span>
              </div>
              <div className="w-20 h-20 rounded-full glass flex items-center justify-center border border-white/10">
                <span className="font-mono text-neon-purple">AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="relative glass rounded-[40px] p-20 text-center overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter">
            Upgrade Your <span className="text-neon-cyan">Smile</span>
          </h2>
          <p className="text-white/40 mb-12 max-w-2xl mx-auto text-xl font-light">
            Don't settle for the past. Step into the future of dental aesthetics today.
          </p>
          <Link 
            to="/appointment" 
            className="inline-block bg-white text-black px-16 py-6 rounded-full font-black uppercase tracking-widest hover:bg-neon-cyan hover:shadow-[0_0_40px_rgba(0,242,255,0.5)] transition-all"
          >
            Initialize Booking
          </Link>
        </div>
      </section>
    </div>
  );
}
