import React from 'react';
import { MessageCircle, Compass, Grid, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'chats', label: 'Chats', icon: MessageCircle },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'gallery', label: 'Gallery', icon: Grid },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4 bg-background/70 backdrop-blur-xl rounded-t-[2rem] z-50 shadow-[0_-8px_30px_rgba(59,42,82,0.04)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-200 active:scale-90",
              isActive 
                ? "bg-surface-container-highest text-primary rounded-full px-6 py-2" 
                : "text-on-surface-variant hover:opacity-80"
            )}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="font-label text-[11px] font-bold tracking-wide uppercase mt-1">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
