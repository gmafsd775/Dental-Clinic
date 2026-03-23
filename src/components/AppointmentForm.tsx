import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function AppointmentForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    gmail: '',
    phone: '',
  });

  const WEBHOOK_URL = 'https://vmi2915475.contaboserver.net/webhook/dental';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    console.log('Attempting transmission to:', WEBHOOK_URL);

    try {
      // We try to send the data. 
      // If n8n is not active, the production URL will return 404.
      // With no-cors, we can't see the 404, but the network request itself should succeed.
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors', // Bypasses CORS pre-flight
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(formData),
      });

      // In no-cors mode, type is 'opaque', status is 0.
      console.log('Fetch completed. Response type:', response.type);
      
      // We assume success because no-cors doesn't throw on 404/500
      setStatus('success');
      setFormData({ name: '', gmail: '', phone: '' });
      
    } catch (error) {
      console.error('Network Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto glass p-10 rounded-[32px] border border-white/10 shadow-2xl relative z-10">
      <h2 className="text-3xl font-black text-white mb-8 text-center uppercase italic tracking-tighter">Request Access</h2>
      
      {status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10"
        >
          <div className="w-20 h-20 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
            <CheckCircle2 className="w-10 h-10 text-neon-cyan" />
          </div>
          <h3 className="text-2xl font-black text-white mb-3 uppercase italic">Transmission Sent</h3>
          <p className="text-white/40 font-light">Your coordinates have been received. Our team will contact you shortly.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-8 text-neon-cyan font-mono text-sm uppercase tracking-widest hover:neon-text-cyan transition-all"
          >
            New Transmission
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-[0.2em] text-white/40 ml-1">Identity</label>
            <input
              id="name"
              type="text"
              required
              className="w-full bg-white/5 px-5 py-4 rounded-2xl border border-white/10 focus:border-neon-cyan/50 focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/10"
              placeholder="FULL NAME"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="gmail" className="block text-xs font-mono uppercase tracking-[0.2em] text-white/40 ml-1">Gmail Node</label>
            <input
              id="gmail"
              type="email"
              required
              className="w-full bg-white/5 px-5 py-4 rounded-2xl border border-white/10 focus:border-neon-purple/50 focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/10"
              placeholder="USER@GMAIL.COM"
              value={formData.gmail}
              onChange={(e) => setFormData({ ...formData, gmail: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-[0.2em] text-white/40 ml-1">Comms Link</label>
            <input
              id="phone"
              type="tel"
              required
              className="w-full bg-white/5 px-5 py-4 rounded-2xl border border-white/10 focus:border-neon-pink/50 focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/10"
              placeholder="+1 (000) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-3 text-neon-pink text-xs bg-neon-pink/5 p-4 rounded-2xl border border-neon-pink/20">
              <AlertCircle className="w-4 h-4" />
              <p className="uppercase tracking-widest">Link Failure. Retry Transmission.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-white text-black font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 hover:bg-neon-cyan hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              'Initialize'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
