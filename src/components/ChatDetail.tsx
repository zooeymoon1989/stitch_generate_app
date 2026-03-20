import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Video, Phone, MoreVertical, PlusCircle, Image as ImageIcon, Mic, Smile, Send, PlayCircle, CheckCircle, Cpu } from 'lucide-react';
import { MESSAGES, USERS } from '../constants';
import { cn } from '../lib/utils';

interface ChatDetailProps {
  userId: string;
  onBack: () => void;
}

export const ChatDetail: React.FC<ChatDetailProps> = ({ userId, onBack }) => {
  const user = USERS.find(u => u.id === userId) || USERS[0];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex flex-col h-screen bg-background"
    >
      {/* Header */}
      <header className="fixed top-0 w-full z-50 shadow-[0_12px_40px_rgba(59,42,82,0.06)] bg-background/70 backdrop-blur-xl flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
            <ArrowLeft size={24} className="text-primary" />
          </button>
          <div className="relative">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
            {user.isOnline && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>
          <div>
            <h1 className="font-headline font-bold text-primary tracking-tight text-lg leading-tight">{user.name}</h1>
            <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">Active now</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors"><Video size={20} className="text-primary" /></button>
          <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors"><Phone size={20} className="text-primary" /></button>
          <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors"><MoreVertical size={20} className="text-primary" /></button>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 mt-24 mb-32 px-4 md:px-8 max-w-5xl mx-auto w-full flex flex-col gap-6 overflow-y-auto hide-scrollbar">
        <div className="flex justify-center my-4">
          <span className="bg-surface-container-low px-4 py-1 rounded-full text-[11px] font-label font-medium text-on-surface-variant uppercase tracking-widest">Today</span>
        </div>

        {MESSAGES.map((msg) => {
          const isMe = msg.senderId === 'me';
          const isTool = msg.senderId === 'tool';

          if (isTool) {
            return (
              <section key={msg.id} className="bg-surface-container-low rounded-xl p-4 md:p-6 border border-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center shadow-lg">
                    <Cpu size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface text-sm">{msg.toolData.name}</h3>
                    <p className="text-[11px] text-on-surface-variant font-label uppercase tracking-widest">{msg.toolData.subtitle}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {msg.toolData.results.map((res: any, i: number) => (
                    <div key={i} className="bg-surface-container-lowest p-3 rounded-lg flex flex-col gap-1">
                      <span className="text-[10px] font-label text-on-surface-variant uppercase">{res.label}</span>
                      <span className={cn("font-bold text-lg", res.color || "text-on-surface")}>{res.value}</span>
                    </div>
                  ))}
                  <div className="bg-surface-container-lowest p-3 rounded-lg flex flex-col gap-1 col-span-2">
                    <span className="text-[10px] font-label text-on-surface-variant uppercase">{msg.toolData.suggestion.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: msg.toolData.suggestion.hex }} />
                      <span className="text-on-surface font-mono text-xs">{msg.toolData.suggestion.value}</span>
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full bg-surface-container-highest text-primary font-label text-[11px] font-bold py-2 rounded-full uppercase tracking-widest hover:bg-primary/10 transition-colors">
                  Apply Optimization
                </button>
              </section>
            );
          }

          return (
            <div key={msg.id} className={cn("flex flex-col max-w-[85%]", isMe ? "self-end items-end" : "self-start items-start")}>
              <div className={cn(
                "px-4 py-3 rounded-lg shadow-sm",
                isMe ? "primary-gradient text-on-primary rounded-br-sm" : "bg-surface-container-high text-on-surface rounded-bl-sm"
              )}>
                {msg.type === 'text' && <p className="text-[15px] leading-relaxed">{msg.text}</p>}
                {msg.type === 'image' && (
                  <div className="p-1 rounded-lg overflow-hidden">
                    <img src={msg.mediaUrl} alt="Media" className="w-full h-48 md:h-64 object-cover rounded-md" referrerPolicy="no-referrer" />
                    <p className="text-[13px] text-on-surface-variant font-medium mt-2">Concept_A_Atmosphere.png</p>
                  </div>
                )}
                {msg.type === 'video' && (
                  <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
                      <PlayCircle size={48} className="text-white opacity-80" />
                    </div>
                    <img src={msg.mediaUrl} alt="Video" className="w-full h-40 object-cover rounded-md blur-[1px]" referrerPolicy="no-referrer" />
                    <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-white text-[10px] font-medium">
                      <Video size={14} /> 0:45
                    </div>
                  </div>
                )}
                <span className={cn("block text-[10px] mt-2 font-label", isMe ? "text-primary-container text-right" : "text-on-surface-variant")}>
                  {msg.timestamp}
                </span>
              </div>
              {isMe && (
                <div className="flex items-center gap-2 mt-1 mr-2">
                  <span className="text-[10px] font-label text-on-surface-variant">Read</span>
                  <CheckCircle size={14} className="text-primary" fill="currentColor" />
                </div>
              )}
            </div>
          );
        })}
      </main>

      {/* Input */}
      <div className="fixed bottom-0 w-full glass-header pb-8 pt-4 px-4 z-50">
        <div className="max-w-4xl mx-auto flex items-end gap-3">
          <div className="flex items-center gap-1 mb-1">
            <button className="p-2 hover:bg-surface-container-highest rounded-full transition-all active:scale-90 text-on-surface-variant"><PlusCircle size={24} /></button>
            <button className="p-2 hover:bg-surface-container-highest rounded-full transition-all active:scale-90 text-on-surface-variant"><ImageIcon size={24} /></button>
            <button className="p-2 hover:bg-surface-container-highest rounded-full transition-all active:scale-90 text-on-surface-variant"><Mic size={24} /></button>
          </div>
          <div className="flex-1 relative">
            <textarea 
              placeholder="Type a message..."
              className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-xl py-3 px-5 pr-12 text-[15px] resize-none overflow-hidden max-h-32 shadow-sm placeholder:text-on-surface-variant/50"
              rows={1}
            />
            <button className="absolute right-3 bottom-2 text-primary p-1 hover:bg-primary/5 rounded-full transition-colors">
              <Smile size={24} />
            </button>
          </div>
          <button className="primary-gradient w-12 h-12 rounded-full flex items-center justify-center text-on-primary shadow-lg active:scale-90 transition-transform mb-0.5">
            <Send size={24} fill="currentColor" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
