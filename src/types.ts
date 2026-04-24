export type Theme = 'dark' | 'light';

export interface AppSettings {
  theme: Theme;
  notificationsEnabled: boolean;
  notificationTiming: 'morning' | 'afternoon' | 'night';
}

export interface Quote {
  id: string;
  text: string;
  author: string;
  category: string;
}

export type Tab = 'home' | 'categories' | 'favorites' | 'settings';
