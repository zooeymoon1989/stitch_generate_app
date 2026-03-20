/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Edit2 } from 'lucide-react';
import { SignIn } from './components/SignIn';
import { ChatList } from './components/ChatList';
import { ChatDetail } from './components/ChatDetail';
import { Explore } from './components/Explore';
import { Gallery } from './components/Gallery';
import { Profile } from './components/Profile';
import { BottomNav } from './components/BottomNav';

type Screen = 'signin' | 'main' | 'chat-detail';
type Tab = 'chats' | 'explore' | 'gallery' | 'profile';

export default function App() {
  const [screen, setScreen] = useState<Screen>('signin');
  const [activeTab, setActiveTab] = useState<Tab>('chats');
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const handleSignIn = () => setScreen('main');
  
  const handleChatClick = (userId: string) => {
    setSelectedChatId(userId);
    setScreen('chat-detail');
  };

  const handleBackFromChat = () => {
    setScreen('main');
    setSelectedChatId(null);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'chats':
        return (
          <>
            <ChatList onChatClick={handleChatClick} />
            <button className="fixed bottom-28 right-6 w-14 h-14 rounded-full primary-gradient text-on-primary shadow-lg flex items-center justify-center z-50 transition-transform active:scale-90 hover:scale-105">
              <Edit2 size={24} />
            </button>
          </>
        );
      case 'explore':
        return <Explore />;
      case 'gallery':
        return <Gallery />;
      case 'profile':
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      <AnimatePresence mode="wait">
        {screen === 'signin' && (
          <SignIn key="signin" onSignIn={handleSignIn} />
        )}

        {screen === 'main' && (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pb-20"
          >
            {renderTabContent()}
            <BottomNav activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab as Tab)} />
          </motion.div>
        )}

        {screen === 'chat-detail' && selectedChatId && (
          <ChatDetail 
            key="chat-detail"
            userId={selectedChatId} 
            onBack={handleBackFromChat} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
