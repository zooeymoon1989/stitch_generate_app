import React from 'react';
import { Search, MoreVertical } from 'lucide-react';

interface TopBarProps {
  title: string;
  showSearch?: boolean;
  showMore?: boolean;
  avatar?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ title, showSearch = true, showMore = true, avatar }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(59,42,82,0.06)] flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-3">
        {avatar && (
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
            <img src={avatar} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        )}
        <h1 className="font-headline font-bold tracking-tight text-xl text-primary">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {showSearch && (
          <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors">
            <Search size={20} className="text-primary" />
          </button>
        )}
        {showMore && (
          <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors">
            <MoreVertical size={20} className="text-on-surface-variant" />
          </button>
        )}
      </div>
    </header>
  );
};
