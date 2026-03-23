import { motion } from 'motion/react';
import AppointmentForm from '../components/AppointmentForm';
import { Phone, Mail } from 'lucide-react';

export default function Appointment() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan text-xs font-mono tracking-[0.3em] uppercase mb-8 bg-neon-cyan/5">
            Secure Portal
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase italic tracking-tighter leading-none">
            Initialize <br />
            <span className="text-neon-cyan neon-text-cyan">Booking</span>
          </h1>
          <p className="text-xl text-white/40 mb-12 font-light leading-relaxed max-w-lg">
            Our automated scheduling system will synchronize your request with our surgical team. Expect a response within 120 minutes.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all">
                <Phone className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Direct Line</h4>
                <p className="text-white/60 font-mono text-lg">+923219088673</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(188,19,254,0.3)] transition-all">
                <Mail className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Secure Mail</h4>
                <p className="text-white/60 font-mono text-lg">damha577@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-20 blur-2xl rounded-[40px]"></div>
          <AppointmentForm />
        </motion.div>
      </div>
    </div>
  );
}
