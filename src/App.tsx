import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Sparkles, MessageSquare, Menu, X } from 'lucide-react';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ArticlesSection } from './components/ArticlesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactModal } from './components/ContactModal';

type TabType = 'home' | 'about' | 'portfolio' | 'articles';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper for tab switching that also scroll smoothly to top
  const handleSwitchTab = (tab: TabType, section?: string) => {
    setActiveTab(tab);
    if (tab === 'portfolio' && section === 'brand') {
      // Small timeout to let component render before dispatching event
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('SWITCH_PORTFOLIO_TAB', { detail: 'brand' }));
      }, 100);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-black flex flex-col justify-between">
      {/* BACKGROUND ACCENT DESIGN DOTS FOR VIBE */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -z-10 pointer-events-none" />

      {/* PERSISTENT NEOBRUTALIST HEADER (Visual Match with Image 1) */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sticky top-0 z-40">
        <div className="w-full bg-white border-3 border-black rounded-2xl sm:rounded-full px-5 py-3 md:py-4 flex items-center justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Logo Brand matching Image 1: Left circle symbol */}
          <div 
            onClick={() => handleSwitchTab('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            {/* The bold "O" circle outline */}
            <div className="w-9 h-9 rounded-full border-3 border-black flex items-center justify-center bg-white group-hover:bg-neo-yellow transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-black bg-black" />
            </div>
            <span className="font-display font-black tracking-tight text-xl hidden sm:inline-block">
              程诗恩 / <span className="text-neo-pink">作品集</span>
            </span>
          </div>

          {/* Center Tabs Navigation links (Image 1 style) */}
          <nav className="hidden md:flex items-center gap-1.5 font-mono">
            <button
              onClick={() => handleSwitchTab('home')}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer select-none ${
                activeTab === 'home'
                  ? 'bg-black text-white border border-black'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              首页
            </button>
            <button
              onClick={() => handleSwitchTab('about')}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer select-none ${
                activeTab === 'about'
                  ? 'bg-black text-white border border-black'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              关于我
            </button>
            <button
              onClick={() => handleSwitchTab('portfolio')}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer select-none ${
                activeTab === 'portfolio'
                  ? 'bg-black text-white border border-black'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              我的作品
            </button>
            <button
              onClick={() => handleSwitchTab('articles')}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all cursor-pointer select-none ${
                activeTab === 'articles'
                  ? 'bg-black text-white border border-black'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              我的文章
            </button>
          </nav>

          {/* Right Action side: Small square envelope button (Image 1 style) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsContactOpen(true)}
              className="w-10 h-10 border-2 border-black rounded-xl bg-black text-white hover:bg-neo-pink transition-colors cursor-pointer flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
              title="Get in touch"
              id="header-contact-icon-btn"
            >
              <Mail className="w-5 h-5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 border-2 border-black rounded-xl bg-white text-black hover:bg-gray-50 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE DRAWER NAVIGATION */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-24 left-4 right-4 bg-white border-3 border-black rounded-2xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hidden z-30 space-y-3"
            >
              <div className="flex flex-col gap-2 font-mono">
                <button
                  onClick={() => handleSwitchTab('home')}
                  className={`w-full py-2.5 text-left px-4 rounded-xl font-bold transition-colors ${
                    activeTab === 'home' ? 'bg-neo-yellow text-black border border-black' : 'hover:bg-gray-50'
                  }`}
                >
                  首页 (Home)
                </button>
                <button
                  onClick={() => handleSwitchTab('about')}
                  className={`w-full py-2.5 text-left px-4 rounded-xl font-bold transition-colors ${
                    activeTab === 'about' ? 'bg-neo-yellow text-black border border-black' : 'hover:bg-gray-50'
                  }`}
                >
                  关于我 (About)
                </button>
                <button
                  onClick={() => handleSwitchTab('portfolio')}
                  className={`w-full py-2.5 text-left px-4 rounded-xl font-bold transition-colors ${
                    activeTab === 'portfolio' ? 'bg-neo-yellow text-black border border-black' : 'hover:bg-gray-50'
                  }`}
                >
                  我的作品 (Portfolio)
                </button>
                <button
                  onClick={() => handleSwitchTab('articles')}
                  className={`w-full py-2.5 text-left px-4 rounded-xl font-bold transition-colors ${
                    activeTab === 'articles' ? 'bg-neo-yellow text-black border border-black' : 'hover:bg-gray-50'
                  }`}
                >
                  我的文章 (Articles)
                </button>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactOpen(true);
                }}
                className="w-full neo-btn-black text-center justify-center py-2.5"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CORE PAGES VIEWER PANEL */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {activeTab === 'home' && (
              <HomeSection 
                onSwitchTab={handleSwitchTab} 
                onOpenContact={() => setIsContactOpen(true)} 
              />
            )}
            
            {activeTab === 'about' && (
              <AboutSection 
                onOpenContact={() => setIsContactOpen(true)} 
                onSwitchTab={handleSwitchTab}
              />
            )}

            {activeTab === 'portfolio' && (
              <PortfolioSection />
            )}

            {activeTab === 'articles' && (
              <ArticlesSection />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* PERSISTENT NEOBRUTALIST FOOTER */}
      <footer className="bg-white border-t-3 border-black py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Copyright branding */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full border-2 border-black flex items-center justify-center bg-neo-yellow shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-mono font-black text-xs">C</span>
              </div>
              <span className="font-display font-black uppercase text-base tracking-wide">
                CHENG SHIEN PORTFOLIO
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-mono font-bold">
              © 2026 Cheng Shien. All rights reserved. 
            </p>
          </div>

          {/* Social icons / handles (Neobrutalist buttons) */}
          <div className="flex flex-wrap gap-3 items-center">
            
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-4 h-10 border-2 border-black bg-black text-white rounded-lg hover:bg-neo-purple hover:text-white transition-all flex items-center gap-2 text-xs font-mono font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-neo-yellow" />
              请联系我
            </button>
          </div>

        </div>
      </footer>

      {/* GLOBAL CONTACT MODAL DIALOG */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
