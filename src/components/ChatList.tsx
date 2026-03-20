import React from 'react';
import { motion } from 'motion/react';
import { Search, Plus } from 'lucide-react';
import { USERS, STORIES } from '../constants';
import { cn } from '../lib/utils';

interface ChatListProps {
  onChatClick: (userId: string) => void;
}

export const ChatList: React.FC<ChatListProps> = ({ onChatClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-24 pb-32 px-6 max-w-2xl mx-auto"
    >
      {/* Search */}
      <section className="mb-8">
        <div className="relative flex items-center">
          <Search className="absolute left-4 text-on-surface-variant" size={20} />
          <input 
            type="text" 
            placeholder="Search conversations..."
            className="w-full bg-surface-container-lowest border-none rounded-full py-4 pl-12 pr-6 font-body shadow-[0_12px_40px_rgba(59,42,82,0.06)] focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
          />
        </div>
      </section>

      {/* Stories */}
      <section className="mb-10 overflow-x-auto pb-2 -mx-6 px-6 hide-scrollbar">
        <div className="flex gap-5">
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <div className="w-16 h-16 rounded-full p-0.5 border-2 border-primary border-dashed flex items-center justify-center">
              <Plus size={24} className="text-primary" />
            </div>
            <span className="text-[11px] font-label font-medium uppercase tracking-wider text-on-surface-variant">Your Story</span>
          </div>
          {STORIES.map((story) => (
            <div key={story.id} className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="w-16 h-16 rounded-full p-0.5 border-2 border-primary flex items-center justify-center">
                <img src={story.userAvatar} alt={story.userName} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="text-[11px] font-label font-medium uppercase tracking-wider text-on-surface">{story.userName}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Messages */}
      <section className="space-y-4">
        <h2 className="font-headline font-bold text-lg text-on-surface mb-6 ml-1">Recent Messages</h2>
        {USERS.map((user) => (
          <button 
            key={user.id}
            onClick={() => onChatClick(user.id)}
            className={cn(
              "w-full rounded-lg p-4 flex items-center gap-4 transition-all active:scale-[0.98] text-left",
              user.unreadCount ? "bg-secondary-container" : "bg-surface-container-low hover:bg-surface-container-high"
            )}
          >
            {user.unreadCount && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-secondary rounded-full" />
            )}
            <div className="w-14 h-14 rounded-full flex-shrink-0 relative">
              <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
              {user.isOnline && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              )}
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className={cn("font-headline font-semibold", user.unreadCount ? "text-on-secondary-container" : "text-on-surface")}>
                  {user.name}
                </h3>
                <span className={cn("font-label text-[11px] uppercase tracking-tighter", user.unreadCount ? "text-secondary font-bold" : "text-outline font-medium")}>
                  {user.time}
                </span>
              </div>
              <p className={cn("font-body text-sm line-clamp-1", user.unreadCount ? "text-on-secondary-container/80" : "text-on-surface-variant")}>
                {user.lastMessage}
              </p>
            </div>
            {user.unreadCount && (
              <div className="w-2.5 h-2.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </section>
    </motion.div>
  );
};
