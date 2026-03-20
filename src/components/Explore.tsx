import React from 'react';
import { motion } from 'motion/react';
import { Search, Plus, ChevronRight } from 'lucide-react';
import { TopBar } from './TopBar';

export const Explore: React.FC = () => {
  const communities = [
    { id: 1, name: 'Neon Dreamers', meta: '12.4k active • Synthwave & Art', color: 'from-primary to-secondary', img: 'https://picsum.photos/seed/neon/200' },
    { id: 2, name: 'The Neural Hub', meta: '8.1k active • AI Future Tech', color: 'from-tertiary to-primary', img: 'https://picsum.photos/seed/neural/200' },
    { id: 3, name: 'Minimalist Collective', meta: '5.2k active • Clean Living', color: 'from-secondary to-tertiary', img: 'https://picsum.photos/seed/min/200' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-surface min-h-screen"
    >
      <TopBar title="Ethereal" avatar="https://picsum.photos/seed/me/200" />
      
      <main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
        <section className="mb-8">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-outline" size={20} />
            <input 
              type="text" 
              placeholder="Discover creators and vibes..."
              className="w-full bg-surface-container-lowest border-none rounded-full py-4 pl-14 pr-6 text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
        </section>

        <section className="mb-10 -mx-6">
          <div className="flex gap-3 overflow-x-auto px-6 hide-scrollbar">
            {['Trending', 'Art', 'Music', 'Technology', 'Gaming', 'Fashion'].map((cat, i) => (
              <button 
                key={cat}
                className={cn(
                  "whitespace-nowrap px-6 py-2.5 rounded-full font-label text-sm transition-all",
                  i === 0 ? "bg-primary text-on-primary font-semibold shadow-lg shadow-primary/20" : "bg-surface-container-high text-on-surface-variant font-medium hover:bg-surface-container-highest"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl font-headline font-bold text-on-surface">Featured Creators</h2>
              <p className="text-on-surface-variant text-sm mt-1">Leading the digital renaissance</p>
            </div>
            <button className="text-primary font-label text-sm font-bold uppercase tracking-widest">See All</button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative group overflow-hidden rounded-lg min-h-[320px]">
              <img src="https://picsum.photos/seed/aria/800/600" alt="Aria Vibe" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="bg-primary/90 text-on-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter mb-2 inline-block">Rising Star</span>
                <h3 className="text-on-primary text-xl font-headline font-bold">Aria Vibe</h3>
                <p className="text-white/70 text-sm mb-4">Digital Sculptor & Curator</p>
                <button className="w-full bg-white/20 backdrop-blur-md text-white py-3 rounded-full font-label text-sm font-bold uppercase tracking-widest hover:bg-white/30 transition-colors">Connect</button>
              </div>
            </div>
            
            {[1, 2].map((i) => (
              <div key={i} className="bg-surface-container-low rounded-lg p-4 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-primary-container p-0.5">
                  <img src={`https://picsum.photos/seed/creator${i}/200`} alt="Creator" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
                </div>
                <h4 className="font-headline font-bold text-sm">{i === 1 ? 'Julian K.' : 'Maya Loo'}</h4>
                <p className="text-[10px] text-on-surface-variant mb-3">{i === 1 ? 'Sound Architect' : 'VR Architect'}</p>
                <button className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-primary/20 transition-colors">Connect</button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-6">Trending Communities</h2>
          <div className="space-y-4">
            {communities.map((comm) => (
              <div key={comm.id} className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4 group hover:bg-surface-container transition-colors cursor-pointer">
                <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shrink-0 overflow-hidden", comm.color)}>
                  <img src={comm.img} alt={comm.name} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <h4 className="font-headline font-bold text-base leading-tight">{comm.name}</h4>
                  <p className="text-on-surface-variant text-sm mt-0.5">{comm.meta}</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <button className="fixed bottom-28 right-6 w-14 h-14 rounded-2xl bg-primary-fixed text-on-primary-fixed shadow-xl shadow-primary/30 flex items-center justify-center z-40 active:scale-90 transition-transform">
        <Plus size={32} />
      </button>
    </motion.div>
  );
};

import { cn } from '../lib/utils';
