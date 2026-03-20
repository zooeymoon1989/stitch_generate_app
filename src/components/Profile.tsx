import React from 'react';
import { motion } from 'motion/react';
import { Camera, Palette, Bolt, SlidersHorizontal, Plus } from 'lucide-react';
import { TopBar } from './TopBar';
import { cn } from '../lib/utils';

export const Profile: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-background min-h-screen"
    >
      <TopBar title="Ethereal" avatar="https://picsum.photos/seed/me/200" />
      
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="relative z-10 w-32 h-32 rounded-full ring-4 ring-primary-container p-1 shrink-0">
              <img src="https://picsum.photos/seed/me/400" alt="Profile" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-2">Elena Rossi</h2>
              <p className="text-on-surface-variant font-medium mb-4 italic">"Curating moments in the ether."</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {['Digital Art', 'Neo-Jazz', 'Minimalism'].map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-surface-container-highest text-primary font-label text-sm rounded-full">{tag}</span>
                ))}
              </div>
              <div className="flex gap-8 justify-center md:justify-start">
                {[
                  { label: 'Followers', val: '1.2k' },
                  { label: 'Following', val: '842' },
                  { label: 'Groups', val: '24' },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <p className="font-headline font-bold text-xl">{stat.val}</p>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="primary-gradient rounded-xl p-8 flex flex-col justify-between text-on-primary shadow-[0_12px_40px_rgba(104,52,235,0.2)]">
            <div>
              <h3 className="font-headline text-xl font-bold mb-2">Active Status</h3>
              <p className="text-on-primary/80 text-sm leading-relaxed">Your profile is currently visible to the Global Discovery stream.</p>
            </div>
            <button className="mt-6 w-full py-4 bg-white/20 backdrop-blur-md rounded-full font-label text-xs font-bold tracking-[0.1em] uppercase hover:bg-white/30 transition-all active:scale-95">
              Edit Visibility
            </button>
          </div>
        </section>

        <div className="flex items-end justify-between mb-8 px-2">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">New Connections</span>
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter">Social Discovery</h2>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 group">
            <span className="font-label text-sm uppercase tracking-wide">Filters</span>
            <SlidersHorizontal size={20} className="group-hover:rotate-180 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Julian Vance', meta: '3km away • Photographer', icon: Camera, tags: ['Leica', 'Vinyl'], img: 'https://picsum.photos/seed/julian/400' },
            { name: 'Deep House Collective', meta: '128 members active now', type: 'group', img: 'https://picsum.photos/seed/house/400' },
            { name: 'Amara K.', meta: '8km away • UI Designer', icon: Palette, tags: ['Typo', 'Swift'], img: 'https://picsum.photos/seed/amara/400' },
            { name: 'Leo Chen', meta: 'Sharing interest in: Minimalism', match: '98% Match', bio: '"Thinking about the intersection of tech and zen."', img: 'https://picsum.photos/seed/leo/400' },
          ].map((item, i) => (
            <div key={i} className={cn(
              "group relative bg-surface-container-low rounded-xl overflow-hidden hover:shadow-[0_20px_50px_rgba(59,42,82,0.1)] transition-all",
              item.match && "border-2 border-primary/20"
            )}>
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                {item.type === 'group' && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold uppercase text-white tracking-widest">
                    Trending Group
                  </div>
                )}
                {item.match && (
                  <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-headline font-bold text-xl px-6 text-center">{item.match}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-headline font-bold text-lg">{item.name}</h4>
                    <p className="text-on-surface-variant text-sm">{item.meta}</p>
                  </div>
                  {item.icon && (
                    <div className="bg-secondary-container text-on-secondary-container p-2 rounded-full">
                      <item.icon size={16} />
                    </div>
                  )}
                </div>
                {item.tags && (
                  <div className="flex flex-wrap gap-1 mb-6">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-tighter px-2 py-0.5 bg-surface-container-highest rounded">{tag}</span>
                    ))}
                  </div>
                )}
                {item.bio && (
                  <div className="bg-surface-container-highest p-3 rounded-lg mb-4 text-xs italic text-on-surface">
                    {item.bio}
                  </div>
                )}
                <button className={cn(
                  "w-full py-3 rounded-full font-label text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors",
                  item.type === 'group' ? "bg-secondary text-on-secondary hover:bg-secondary-dim" : "bg-primary text-on-primary hover:bg-primary-dim"
                )}>
                  {item.match ? <Bolt size={14} /> : <Plus size={14} />}
                  {item.type === 'group' ? 'Join Lounge' : item.match ? 'Quick Chat' : 'Connect'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};
