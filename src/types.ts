export interface User {
  id: string;
  name: string;
  avatar: string;
  status?: string;
  lastMessage?: string;
  time?: string;
  unreadCount?: number;
  isOnline?: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text?: string;
  timestamp: string;
  type: 'text' | 'image' | 'video' | 'tool';
  mediaUrl?: string;
  toolData?: any;
}

export interface Story {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
}
