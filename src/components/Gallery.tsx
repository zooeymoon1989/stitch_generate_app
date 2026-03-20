import React from 'react';
import { motion } from 'motion/react';
import { Search, Star, Play, Share2, Download, Trash2, Plus } from 'lucide-react';
import { TopBar } from './TopBar';

export const Gallery: React.FC = () => {
  const items = [
    { id: 1, type: 'image', url: 'https://picsum.photos/seed/art1/800/1200', span: 'col-span-2 row-span-2', title: 'Vibe Check ✨', meta: 'Shared yesterday • 2.4MB', featured: true },
    { id: 2, type: 'video', url: 'https://picsum.photos/seed/vid1/400/400', span: 'col-span-1 row-span-1', duration: '0:15' },
    { id: 3, type: 'image', url: 'https://picsum.photos/seed/art2/400/400', span: 'col-span-1 row-span-1' },
    { id: 4, type: 'image', url: 'https://picsum.photos/seed/art3/800/400', span: 'col-span-2 row-span-1', badge: 'Newest' },
    { id: 5, type: 'image', url: 'https://picsum.photos/seed/art4/400/400', span: 'col-span-1 row-span-1' },
    { id: 6, type: 'image', url: 'https://picsum.photos/seed/art5/400/400', span: 'col-span-1 row-span-1' },
    { id: 7, type: 'image', url: 'https://picsum.photos/seed/art6/400/800', span: 'col-span-2 row-span-2 md:col-span-1 md:row-span-2' },
    { id: 8, type: 'image', url: 'https://picsum.photos/seed/art7/400/400', span: 'col-span-1 row-span-1' },
    { id: 9, type: 'image', url: 'https://picsum.photos/seed/art8/400/400', span: 'col-span-1 row-span-1' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-background min-h-screen"
    >
      <TopBar title="Ethereal" avatar="https://picsum.photos/seed/me/200" />
      
      <main className="pt-24 pb-48 px-6 max-w-7xl mx-auto">
        <section className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs mb-2 block">Media Library</span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-tight">
                Conversation <br/><span className="text-primary-dim italic">Aesthetics</span>
              </h2>
            </div>
            <div className="flex gap-2 bg-surface-container-low p-1.5 rounded-full overflow-x-auto hide-scrollbar">
              {['All Media', 'Photos', 'Videos', 'Links'].map((filter, i) => (
                <button 
                  key={filter}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                    i === 0 ? "bg-primary text-on-primary shadow-md" : "text-on-surface-variant hover:bg-surface-container-highest"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <div key={item.id} className={cn("group relative overflow-hidden rounded-lg bg-surface-container shadow-sm hover:shadow-xl transition-all duration-500", item.span)}>
              <img src={item.url} alt="Gallery item" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              
              {item.featured && (
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-medium text-lg">{item.title}</p>
                  <p className="text-white/80 text-xs font-label">{item.meta}</p>
                </div>
              )}

              {item.type === 'video' && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-lg flex items-center justify-center border border-white/40">
                      <Play size={20} className="text-white" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-on-surface/40 backdrop-blur-sm rounded px-1.5 py-0.5">
                    <span className="text-[10px] text-white font-bold">{item.duration}</span>
                  </div>
                </>
              )}

              {item.badge && (
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">{item.badge}</span>
                </div>
              )}

              {item.featured && (
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 text-white">
                  <Star size={14} fill="currentColor" />
                </div>
              )}
            </div>
          ))}
          
          <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-lg bg-surface-container-low border-2 border-dashed border-outline-variant/30 flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-all">
            <div className="text-center">
              <Plus size={32} className="text-outline mx-auto mb-2" />
              <p className="text-[10px] font-label font-semibold text-outline tracking-wider uppercase">Upload</p>
            </div>
          </div>
        </section>

        {/* Selection Bar */}
        <div className="fixed bottom-28 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md bg-surface-container-lowest/80 backdrop-blur-2xl border border-white/20 rounded-full px-6 py-4 shadow-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold">3 Selected</div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface hover:text-primary transition-colors"><Share2 size={20} /></button>
            <button className="text-on-surface hover:text-primary transition-colors"><Download size={20} /></button>
            <button className="text-error hover:opacity-70 transition-opacity"><Trash2 size={20} /></button>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

import { cn } from '../lib/utils';
