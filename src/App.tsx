import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Layers, 
  Heart, 
  Settings as SettingsIcon, 
  Share2, 
  Book, 
  Flame, 
  Briefcase, 
  Brain, 
  Sparkles, 
  Leaf,
  Moon,
  Sun,
  Bell,
  Trash2,
  ChevronRight,
  Download,
  Info,
  Zap,
  Shield,
  Clock,
  RefreshCw,
  Target,
  Repeat,
  User,
  Smartphone,
  TrendingUp,
  PenTool,
  PlusCircle,
  Anchor,
  Users,
  Mountain,
  Activity,
  MessageSquare,
  Mic,
  Code,
  Edit3,
  Palette,
  Globe,
  Search,
  Timer,
  Cpu,
  Wrench,
  Coffee,
  Dumbbell,
  Bed,
  Compass,
  Hourglass,
  Gift,
  Smile
} from 'lucide-react';

const IconMap: Record<string, any> = {
  Book, Sun, Zap, Flame, Briefcase, Shield, Clock, RefreshCw, Target, Repeat, User, Smartphone, TrendingUp, Heart, PenTool, PlusCircle, Anchor, Users, Mountain, Activity, Brain, Leaf,
  MessageSquare, Mic, Code, Edit3, Palette, Globe, Search, Timer, Cpu, Wrench, Coffee, Dumbbell, Bed, Compass, Hourglass, Gift, Smile
};
import { QUOTES, CATEGORIES, Quote } from './data/quotes';
import { AppSettings, Theme, Tab } from './types';
import { toPng } from 'html-to-image';
import download from 'downloadjs';

// --- Components ---

const BottomNav = ({ activeTab, onTabChange, theme }: { activeTab: Tab, onTabChange: (tab: Tab) => void, theme: Theme }) => {
  const tabs: { id: Tab; icon: any; label: string }[] = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'categories', icon: Layers, label: 'Mastery' },
    { id: 'favorites', icon: Heart, label: 'Saved' },
    { id: 'settings', icon: SettingsIcon, label: 'Settings' },
  ];

  return (
    <nav className={`fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-all duration-500 ${
      theme === 'dark' ? 'bg-[#0D0D0D]/95 border-gold/20 shadow-gold/5' : 'bg-white/95 border-gold/10'
    }`}>
      <div className="flex justify-around items-center h-16 sm:h-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center w-full h-full transition-all duration-300 relative group`}
          >
            <tab.icon size={20} strokeWidth={activeTab === tab.id ? 3 : 2} className={`transition-all duration-300 sm:size-[22px] ${activeTab === tab.id ? 'scale-110' : 'opacity-40 hover:opacity-70'}`} />
            <span className={`text-[8px] sm:text-[10px] mt-1 sm:mt-1.5 font-black tracking-widest sm:tracking-[0.2em] uppercase transition-all duration-300 ${
              activeTab === tab.id ? 'opacity-100' : 'opacity-0 scale-90'
            }`}>
              {tab.label}
            </span>
            <div className={`absolute -top-[1px] left-1/2 -translate-x-1/2 w-8 sm:w-12 h-0.5 sm:h-1 gold-gradient rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)] transition-all duration-500 ${activeTab === tab.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
          </button>
        ))}
      </div>
    </nav>
  );
};

const QuoteCard = ({ 
  quote, 
  isFavorite, 
  onToggleFavorite,
  onShare,
  theme 
}: { 
  quote: Quote, 
  isFavorite: boolean, 
  onToggleFavorite: (quote: Quote) => void,
  onShare: (quote: Quote) => void,
  theme: Theme
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`relative w-full max-w-[340px] sm:max-w-sm mx-auto aspect-[4/5] sm:aspect-[3/4] p-8 sm:p-10 flex flex-col justify-center gap-6 sm:gap-8 rounded-[32px] sm:rounded-[40px] shadow-2xl overflow-hidden border-2 transition-all duration-700 ${
        theme === 'dark' 
          ? 'bg-[#151515] border-gold/40 shadow-gold/10' 
          : 'bg-white border-gold/30 shadow-2xl shadow-gold/20'
      }`}
    >
      {/* Decorative background element */}
      <div className={`absolute top-[-10%] right-[-10%] w-32 h-32 sm:w-48 sm:h-48 blur-[60px] sm:blur-[80px] rounded-full opacity-40 transition-colors duration-700 ${
        theme === 'dark' ? 'bg-gold' : 'bg-gold-light'
      }`} />
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <span className={`text-6xl sm:text-7xl font-display font-black leading-none opacity-20 ${theme === 'dark' ? 'text-gold' : 'text-gold-dark'}`}>“</span>
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-display font-extrabold leading-[1.2] sm:leading-[1.1] mb-6 sm:mb-10 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-[#0D0D0D]'}`}>
          {quote.text}
        </h2>
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div className={`w-12 sm:w-16 h-1 rounded-full gold-gradient`} />
          <p className={`text-[10px] sm:text-[11px] font-black tracking-[0.3em] uppercase mt-1 ${theme === 'dark' ? 'text-gold-light' : 'text-gold-dark'}`}>
            {quote.author}
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-10 left-8 sm:left-10 right-8 sm:right-10 flex justify-between items-center z-10">
        <button 
          onClick={() => onToggleFavorite(quote)}
          className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md transition-all active:scale-90 ${
            isFavorite 
              ? 'bg-red-500/15 text-red-500' 
              : theme === 'dark' ? 'bg-white/5 text-gray-400 hover:text-gold hover:bg-gold/10' : 'bg-gold/10 text-gold-dark hover:bg-gold/20'
          }`}
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} strokeWidth={3} className="sm:size-5" />
        </button>
        <button 
          onClick={() => onShare(quote)}
          className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-md transition-all active:scale-90 ${
            theme === 'dark' ? 'bg-white/5 text-gray-400 hover:text-gold hover:bg-gold/10' : 'bg-gold/10 text-gold-dark hover:bg-gold/20'
          }`}
        >
          <Share2 size={18} strokeWidth={3} className="sm:size-5" />
        </button>
      </div>
    </motion.div>
  );
};

// --- App Shell ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [notification, setNotification] = useState<string | null>(null);

  const [favorites, setFavorites] = useState<Quote[]>(() => {
    const saved = localStorage.getItem('mindfuel_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('mindfuel_settings');
    return saved ? JSON.parse(saved) : {
      theme: 'dark',
      notificationsEnabled: true,
      notificationTiming: 'morning'
    };
  });

  useEffect(() => {
    if (settings.notificationsEnabled) {
      const interval = setInterval(() => {
        const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
        setNotification(randomQuote.text);
        setTimeout(() => setNotification(null), 5000);
      }, 60000); // Every minute for demo purposes
      return () => clearInterval(interval);
    }
  }, [settings.notificationsEnabled]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Daily Quote logic (deterministic based on date)
  const dailyQuotes = useMemo(() => {
    const dayOfYear = Math.floor((new Date().getTime() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    const startIdx = (dayOfYear * 3) % QUOTES.length;
    return QUOTES.slice(startIdx, startIdx + 3);
  }, []);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('mindfuel_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('mindfuel_settings', JSON.stringify(settings));
  }, [settings]);

  const toggleFavorite = (quote: Quote) => {
    setFavorites(prev => {
      const exists = prev.find(q => q.id === quote.id);
      if (exists) return prev.filter(q => q.id !== quote.id);
      return [...prev, quote];
    });
  };

  const [isSharing, setIsSharing] = useState(false);
  const [sharingQuote, setSharingQuote] = useState<Quote | null>(null);
  const shareRef = React.useRef<HTMLDivElement>(null);

  const handleShareAsImage = async () => {
    if (!shareRef.current) return;
    try {
      const dataUrl = await toPng(shareRef.current, { quality: 0.95 });
      download(dataUrl, `mindfuel-${sharingQuote?.id}.png`);
      setIsSharing(false);
    } catch (err) {
      console.error('oops, something went wrong!', err);
    }
  };

  const shareQuote = (quote: Quote) => {
    setSharingQuote(quote);
    setIsSharing(true);
  };

  const filteredQuotes = useMemo(() => {
    if (!selectedCategory) return [];
    return QUOTES.filter(q => q.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className={`min-h-screen transition-colors duration-500 pb-24 ${
      settings.theme === 'dark' ? 'bg-[#0A0A0A] text-white' : 'bg-[#FFFDF5] text-[#1A1A1A]'
    }`}>
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full ${
          settings.theme === 'dark' ? 'bg-gold/20' : 'bg-gold-light/30'
        }`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full ${
          settings.theme === 'dark' ? 'bg-gold/10' : 'bg-gold/20'
        }`} />
      </div>

      {/* Simulated Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-6 right-6 z-[110] max-w-sm mx-auto"
          >
            <div className={`p-4 rounded-2xl shadow-2xl border flex gap-3 items-center ${
              settings.theme === 'dark' 
                ? 'bg-[#1A1A1A] border-gold/30 text-white' 
                : 'bg-white border-blue-200/50 text-gray-900 shadow-xl shadow-blue-900/10'
            }`}>
              <div className={`p-2 rounded-xl flex-shrink-0 ${
                settings.theme === 'dark' ? 'bg-gold/20 text-gold' : 'bg-blue-600 text-white'
              }`}>
                <Bell size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">MindFuel Reminder</p>
                <p className="text-xs font-semibold leading-relaxed truncate italic">"{notification}"</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 px-6 pt-12 max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tighter gold-text-gradient">
                    MINDFUEL
                  </h1>
                  <p className="text-gold-dark text-[9px] sm:text-[10px] mt-2 uppercase tracking-[0.4em] font-black opacity-70">Elevate Your Existence</p>
                </div>
                <div className="text-right hidden sm:block">
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest font-black opacity-50">EST. 2024</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <QuoteCard 
                  quote={dailyQuotes[currentQuoteIndex]}
                  isFavorite={favorites.some(f => f.id === dailyQuotes[currentQuoteIndex].id)}
                  onToggleFavorite={toggleFavorite}
                  onShare={shareQuote}
                  theme={settings.theme}
                />
                
                <div className="flex justify-center gap-2">
                  {dailyQuotes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentQuoteIndex(idx)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        currentQuoteIndex === idx 
                          ? 'w-8 bg-gold shadow-[0_0_10px_rgba(197,160,89,0.5)]' 
                          : (settings.theme === 'dark' ? 'w-2 bg-white/10' : 'w-2 bg-gold/20')
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className={`p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] border-2 transition-all duration-700 ${settings.theme === 'dark' ? 'bg-[#151515] border-white/5 shadow-2xl' : 'bg-white border-gold/10 shadow-xl shadow-gold/5'}`}>
                <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] mb-3 sm:mb-4 flex items-center gap-2 text-gold-dark">
                  <Flame size={14} strokeWidth={3} />
                  Initiatory Protocol
                </h3>
                <p className={`text-xs sm:text-sm font-bold leading-relaxed ${settings.theme === 'dark' ? 'text-white/60' : 'text-gold-dark/70'}`}>
                  Anchor your consciousness. The discipline you execute today defines the legend you become tomorrow.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'categories' && (
            <motion.div
              key="categories"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              {!selectedCategory ? (
                <div className="space-y-8 sm:space-y-10">
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight uppercase">Categories</h2>
                    <p className="text-gold-dark text-[9px] sm:text-[10px] mt-2 uppercase tracking-[0.4em] font-black opacity-60">Mastery Tracks</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {CATEGORIES.map((cat) => {
                      const Icon = IconMap[cat.icon] || Book;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] transition-all active:scale-95 border-2 ${
                            settings.theme === 'dark' 
                              ? 'bg-[#151515] border-white/5 hover:border-gold/50 shadow-xl shadow-black/20' 
                              : 'bg-white border-gold/10 shadow-lg shadow-gold/5 hover:border-gold/40'
                          }`}
                        >
                          <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 ${
                            settings.theme === 'dark' ? 'bg-gold/15 text-gold' : 'bg-gold/10 text-gold-dark'
                          }`}>
                            <Icon size={20} strokeWidth={2.5} className="sm:size-6" />
                          </div>
                          <span className={`text-[8px] sm:text-[10px] font-black leading-tight text-center tracking-widest sm:tracking-[0.15em] uppercase transition-colors ${
                            settings.theme === 'dark' ? 'text-white/70' : 'text-gold-dark'
                          }`}>{cat.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className="text-xs sm:text-sm font-bold flex items-center gap-2 opacity-60 hover:opacity-100"
                    >
                      <ChevronRight size={14} className="rotate-180 sm:size-4" /> Back
                    </button>
                    <h2 className="text-lg sm:text-xl font-bold">{CATEGORIES.find(c => c.id === selectedCategory)?.title}</h2>
                  </div>
                  <div className="space-y-4">
                    {filteredQuotes.map((q) => (
                      <div 
                        key={q.id}
                        className={`p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border-2 transition-all ${
                          settings.theme === 'dark' 
                            ? 'bg-[#151515] border-white/5 shadow-xl' 
                            : 'bg-white border-gold/10 shadow-lg shadow-gold/5'
                        }`}
                      >
                        <p className="text-lg sm:text-xl mb-4 sm:mb-6 font-display font-black leading-tight tracking-tight">"{q.text}"</p>
                        <div className="flex justify-between items-center">
                          <span className={`text-[9px] sm:text-[10px] font-black tracking-[0.25em] uppercase ${settings.theme === 'dark' ? 'text-gold' : 'text-gold-dark'}`}>
                            {q.author}
                          </span>
                          <div className="flex gap-2">
                             <button onClick={() => toggleFavorite(q)} className={`p-2 transition-colors ${favorites.some(f => f.id === q.id) ? 'text-red-500' : 'text-gray-400'}`}>
                              <Heart size={16} fill={favorites.some(f => f.id === q.id) ? "currentColor" : "none"} />
                            </button>
                            <button onClick={() => shareQuote(q)} className="p-2 text-gray-400 hover:text-blue-500">
                              <Share2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'favorites' && (
            <motion.div
              key="favorites"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight uppercase">Your Saved</h2>
                <p className="text-gold-dark text-[9px] sm:text-[10px] mt-2 uppercase tracking-[0.4em] font-black opacity-60">Growth Archives</p>
              </div>

              {favorites.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 opacity-50">
                  <div className="p-6 rounded-full bg-white/5">
                    <Heart size={48} className="text-gray-600" />
                  </div>
                  <p className="text-xs sm:text-sm">Nothing saved yet. Explore and heart quotes you love!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {favorites.map((q) => (
                    <motion.div 
                      layout
                      key={q.id}
                      className={`p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] border-2 transition-all ${
                        settings.theme === 'dark' ? 'bg-[#151515] border-white/5 shadow-xl' : 'bg-white border-gold/10 shadow-lg shadow-gold/5'
                      }`}
                    >
                      <p className="text-lg sm:text-xl mb-4 sm:mb-6 font-display font-black leading-tight tracking-tight">"{q.text}"</p>
                      <div className="flex justify-between items-center">
                        <span className={`text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase ${settings.theme === 'dark' ? 'text-gold' : 'text-gold-dark'}`}>
                          {q.author}
                        </span>
                        <div className="flex gap-1 sm:gap-2">
                          <button onClick={() => toggleFavorite(q)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-full transition-colors">
                            <Trash2 size={16} />
                          </button>
                          <button onClick={() => shareQuote(q)} className="p-2 text-gray-400 hover:text-gold transition-colors">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight uppercase gold-text-gradient">Settings</h2>
                <p className="text-gold-dark text-[9px] sm:text-[10px] mt-2 uppercase tracking-[0.4em] font-black opacity-60">System Configuration</p>
              </div>

              <div className="space-y-4 sm:space-y-6 pb-32">
                <section className={`p-5 sm:p-6 rounded-[28px] sm:rounded-3xl space-y-4 transition-all duration-500 ${settings.theme === 'dark' ? 'bg-[#151515] border border-white/5 shadow-2xl' : 'bg-white border border-gold/10 shadow-sm'}`}>
                  <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                     Appearance
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {settings.theme === 'dark' ? <Moon size={18} className="text-gold sm:size-5" /> : <Sun size={18} className="text-blue-500 sm:size-5" />}
                      <span className="font-bold text-xs sm:text-sm tracking-tight">Premium Mode</span>
                    </div>
                    <button 
                      onClick={() => setSettings(prev => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }))}
                      className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full transition-colors relative ${settings.theme === 'dark' ? 'bg-gold' : 'bg-gray-200'}`}
                    >
                      <motion.div 
                        animate={{ x: settings.theme === 'dark' ? (window.innerWidth < 640 ? 22 : 26) : 2 }}
                        className="absolute top-0.5 sm:top-1 left-0 w-4 h-4 bg-white rounded-full shadow-sm" 
                      />
                    </button>
                  </div>
                </section>

                <section className={`p-5 sm:p-6 rounded-[28px] sm:rounded-3xl space-y-4 transition-all duration-500 ${settings.theme === 'dark' ? 'bg-[#151515] border border-white/5 shadow-2xl' : 'bg-white border border-gold/10 shadow-sm'}`}>
                  <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-2">
                    <Bell size={14} /> Notifications
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm tracking-tight">Daily Reminders</span>
                    <button 
                      onClick={() => setSettings(prev => ({ ...prev, notificationsEnabled: !prev.notificationsEnabled }))}
                      className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full transition-colors relative ${settings.notificationsEnabled ? (settings.theme === 'dark' ? 'bg-gold' : 'bg-blue-600') : 'bg-gray-200'}`}
                    >
                      <motion.div 
                        animate={{ x: settings.notificationsEnabled ? (window.innerWidth < 640 ? 22 : 26) : 2 }}
                        className="absolute top-0.5 sm:top-1 left-0 w-4 h-4 bg-white rounded-full shadow-sm" 
                      />
                    </button>
                  </div>
                  {settings.notificationsEnabled && (
                    <div className="flex gap-2 pt-2 overflow-x-auto pb-1 no-scrollbar">
                       {['morning', 'afternoon', 'night', '3x-daily'].map((time) => (
                         <button
                           key={time}
                           onClick={() => setSettings(prev => ({ ...prev, notificationTiming: time as any }))}
                           className={`px-3 sm:px-4 py-2 rounded-xl text-[8px] sm:text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                             settings.notificationTiming === time 
                               ? (settings.theme === 'dark' ? 'bg-gold text-black shadow-lg shadow-gold/20' : 'bg-blue-600 text-white shadow-lg shadow-blue-600/20')
                               : (settings.theme === 'dark' ? 'bg-white/5 text-gray-400' : 'bg-gray-50 text-gray-400')
                           }`}
                         >
                           {time.replace('-', ' ')}
                         </button>
                       ))}
                    </div>
                  )}
                </section>

                <section className={`p-5 sm:p-6 rounded-[28px] sm:rounded-3xl space-y-4 transition-all duration-500 ${settings.theme === 'dark' ? 'bg-[#151515] border border-white/5 shadow-2xl' : 'bg-white border border-gold/10 shadow-sm'}`}>
                  <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Support & About</h3>
                  <div className="space-y-4">
                    <button className="flex items-center justify-between w-full font-bold text-xs sm:text-sm tracking-tight group">
                      <span className="flex items-center gap-3"><Info size={18} className="text-gray-400" /> Rate App</span>
                      <ChevronRight size={16} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <button className="flex items-center justify-between w-full font-bold text-xs sm:text-sm tracking-tight group">
                      <span className="flex items-center gap-3"><Share2 size={18} className="text-gray-400" /> Share App</span>
                      <ChevronRight size={16} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </div>

                  <div className="pt-6 sm:pt-8 border-t border-gold/10 mt-4 sm:mt-6 text-center">
                    <p className="text-[9px] sm:text-[10px] text-gold-dark/50 leading-relaxed uppercase tracking-[0.3em] font-black mb-1">
                      Elevation Protocol
                    </p>
                    <p className="font-display font-black text-lg sm:text-xl gold-text-gradient">
                      Sanntanu Halder
                    </p>
                  </div>
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={(tab) => {
        setActiveTab(tab);
        setSelectedCategory(null);
      }} theme={settings.theme} />

      {/* Share Modal */}
      <AnimatePresence>
        {isSharing && sharingQuote && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#121212] border border-gold/20 rounded-3xl p-6 w-full max-w-sm space-y-6"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-bold uppercase tracking-widest text-xs">Share Inspo</h3>
                <button onClick={() => setIsSharing(false)} className="text-gray-500 hover:text-white">
                  <Trash2 size={18} />
                </button>
              </div>

              {/* The element we capture */}
              <div 
                ref={shareRef}
                className="aspect-[4/5] w-full bg-gradient-to-br from-[#2D1B69] via-[#4C1D95] to-[#1E1B4B] p-10 flex flex-col justify-center items-center text-center relative overflow-hidden border border-white/10"
              >
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                  <div className="absolute top-[10%] right-[-10%] w-48 h-48 bg-gold blur-[80px] rounded-full" />
                  <div className="absolute bottom-[10%] left-[-10%] w-48 h-48 bg-purple-500 blur-[80px] rounded-full" />
                </div>
                
                <Sparkles size={24} className="text-gold/30 mb-8" />
                <p className="text-xl md:text-2xl font-display font-black text-white mb-6 leading-relaxed relative z-10 tracking-tight">
                  "{sharingQuote.text}"
                </p>
                <p className="text-gold-light uppercase tracking-[0.3em] text-[10px] font-black mb-12 relative z-10">
                  — {sharingQuote.author}
                </p>

                <div className="mt-auto pt-6 border-t border-white/10 w-full relative z-10">
                  <p className="text-white/40 text-[8px] font-black tracking-[0.4em] uppercase">
                    MindFuel Daily | {sharingQuote.author === 'Sanntanu Halder' ? 'Sanntanu Halder' : 'Protocol'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={async () => {
                    const text = `"${sharingQuote.text}" - ${sharingQuote.author}\n\nMindFuel Daily | Sanntanu Halder`;
                    if (navigator.share) {
                      await navigator.share({ text });
                    } else {
                      navigator.clipboard.writeText(text);
                      alert('Copied to clipboard');
                    }
                    setIsSharing(false);
                  }}
                  className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold uppercase hover:bg-white/10 transition-colors"
                >
                  <Share2 size={16} /> Text
                </button>
                <button 
                  onClick={handleShareAsImage}
                  className="flex items-center justify-center gap-2 py-3 bg-gold text-black rounded-2xl text-xs font-bold uppercase hover:bg-gold-light transition-colors"
                >
                  <Download size={16} /> Image
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
