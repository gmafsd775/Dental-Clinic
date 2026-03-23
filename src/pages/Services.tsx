import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Sparkles, 
  ShieldPlus, 
  Activity, 
  HeartPulse, 
  Smile,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Smile,
    title: "General Dentistry",
    desc: "Routine checkups, cleanings, and preventative care for all ages.",
    price: "From $99"
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "Teeth whitening, veneers, and smile makeovers to boost your confidence.",
    price: "From $299"
  },
  {
    icon: ShieldPlus,
    title: "Orthodontics",
    desc: "Modern braces and clear aligners (Invisalign) for a perfect alignment.",
    price: "From $1,999"
  },
  {
    icon: Activity,
    title: "Oral Surgery",
    desc: "Wisdom teeth removal, implants, and complex surgical procedures.",
    price: "From $499"
  },
  {
    icon: HeartPulse,
    title: "Emergency Care",
    desc: "Same-day appointments for toothaches, broken teeth, and urgent issues.",
    price: "Varies"
  },
  {
    icon: Stethoscope,
    title: "Periodontics",
    desc: "Specialized gum disease treatment and maintenance.",
    price: "From $150"
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1 rounded-full border border-neon-purple/30 text-neon-purple text-xs font-mono tracking-[0.3em] uppercase mb-8 bg-neon-purple/5"
        >
          Our Capabilities
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-8 uppercase italic tracking-tighter"
        >
          Advanced <span className="text-neon-cyan neon-text-cyan">Solutions</span>
        </motion.h1>
        <p className="text-xl text-white/40 font-light max-w-2xl mx-auto">
          We leverage computational dentistry and bio-engineering to deliver results that were previously impossible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-10 rounded-[32px] glass border border-white/5 hover:border-neon-cyan/30 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-cyan/10 transition-all"></div>
            
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all">
              <service.icon className="w-8 h-8 text-neon-cyan" />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight italic">{service.title}</h3>
            <p className="text-white/40 mb-8 leading-relaxed font-light">{service.desc}</p>
            <div className="flex items-center justify-between pt-8 border-t border-white/5">
              <span className="font-mono text-neon-cyan tracking-tighter text-lg">{service.price}</span>
              <Link to="/appointment" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-neon-cyan hover:text-black transition-all border border-white/10">
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-16 rounded-[40px] glass border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic">Custom Protocol?</h2>
          <p className="text-white/40 text-lg font-light">Consult with our lead engineers for a bespoke treatment plan.</p>
        </div>
        <Link 
          to="/appointment" 
          className="relative z-10 bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-neon-purple hover:text-white hover:shadow-[0_0_40px_rgba(188,19,254,0.5)] transition-all"
        >
          Start Consultation
        </Link>
      </motion.div>
    </div>
  );
}
