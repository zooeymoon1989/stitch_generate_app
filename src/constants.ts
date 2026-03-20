import { User, Message, Story } from './types';

export const USERS: User[] = [
  {
    id: '1',
    name: 'Elena Vance',
    avatar: 'https://picsum.photos/seed/elena/200',
    lastMessage: 'That new exhibition at the gallery was incredible...',
    time: 'Just Now',
    unreadCount: 1,
    isOnline: true,
  },
  {
    id: '2',
    name: 'Marcus Chen',
    avatar: 'https://picsum.photos/seed/marcus/200',
    lastMessage: 'Did you see the latest designs for the project?',
    time: '14:20',
  },
  {
    id: '3',
    name: 'Chloe Aris',
    avatar: 'https://picsum.photos/seed/chloe/200',
    lastMessage: "Let's grab coffee this weekend and catch up!",
    time: 'Yesterday',
    isOnline: true,
  },
  {
    id: '4',
    name: 'Sarah Jenkins',
    avatar: 'https://picsum.photos/seed/sarah/200',
    lastMessage: 'I sent you the files you requested via email.',
    time: 'Tuesday',
  },
];

export const STORIES: Story[] = [
  { id: '1', userId: '1', userName: 'Elena', userAvatar: 'https://picsum.photos/seed/elena/200' },
  { id: '2', userId: '2', userName: 'Julian', userAvatar: 'https://picsum.photos/seed/julian/200' },
  { id: '3', userId: '4', userName: 'Sarah', userAvatar: 'https://picsum.photos/seed/sarah/200' },
];

export const MESSAGES: Message[] = [
  {
    id: 'm1',
    senderId: '1',
    text: "Hey! Did you see the latest concept for the Ethereal Social project? I've uploaded the moodboard below. ✨",
    timestamp: '10:42 AM',
    type: 'text',
  },
  {
    id: 'm2',
    senderId: '1',
    timestamp: '10:43 AM',
    type: 'image',
    mediaUrl: 'https://picsum.photos/seed/concept/800/600',
  },
  {
    id: 'm3',
    senderId: 'me',
    text: "This looks incredible. The tonal layering is spot on. Let's use the OpenClaw plugin to verify the accessibility contrast ratios on those purples.",
    timestamp: '10:45 AM',
    type: 'text',
  },
  {
    id: 'm4',
    senderId: 'tool',
    timestamp: '10:46 AM',
    type: 'tool',
    toolData: {
      name: 'OpenClaw Integration',
      subtitle: 'Accessibility Analysis Tool',
      results: [
        { label: 'WCAG AAA', value: 'Passed', color: 'text-green-600' },
        { label: 'Contrast', value: '7.42:1' },
      ],
      suggestion: { label: 'Suggested Tint', value: '#7C4DFF (88%)', hex: '#7C4DFF' },
    },
  },
  {
    id: 'm5',
    senderId: '1',
    timestamp: '10:47 AM',
    type: 'video',
    mediaUrl: 'https://picsum.photos/seed/video/800/600',
  },
];
