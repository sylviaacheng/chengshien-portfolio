import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Video, FileText, ArrowRight } from 'lucide-react';
import { wechatArticlesData, xiaohongshuData, brandPromotionsData } from '../data';

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'wechat' | 'xiaohongshu' | 'brand'>('all');

  useEffect(() => {
    const handleSwitchTab = (e: CustomEvent) => {
      if (e.detail === 'brand') {
        setActiveTab('brand');
        // Optional: wait a moment for render then scroll down slightly
        setTimeout(() => {
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }, 100);
      }
    };
    window.addEventListener('SWITCH_PORTFOLIO_TAB', handleSwitchTab as EventListener);
    return () => window.removeEventListener('SWITCH_PORTFOLIO_TAB', handleSwitchTab as EventListener);
  }, []);

  const tabs = [
    { id: 'all', label: '全部' },
    { id: 'wechat', label: '有路公众号10w+推文' },
    { id: 'xiaohongshu', label: '有路小红书' },
    { id: 'brand', label: '“发条屋”品牌推广' }
  ];

  return (
    <div className="space-y-12 pb-16 pt-8">
      {/* HEADER PORTFOLIO SECTION */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-none">
          我的 <br />
          <span className="neo-highlight-yellow text-black px-3 py-1">精选作品集</span>
        </h2>
        <p className="text-sm sm:text-base font-medium text-gray-600">
          涵盖公众号爆款推文、小红书图文/视频矩阵，以及品牌线下展会推广的实战成果。
        </p>
      </div>

      {/* FILTER TABS BUTTONS */}
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 text-xs sm:text-sm font-bold font-mono tracking-wider rounded-lg border-2 border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer select-none ${
              activeTab === tab.id
                ? 'bg-neo-yellow text-black translate-x-[2px] translate-y-[2px] shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-white text-black hover:bg-gray-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* DYNAMIC CONTENT AREA */}
      <div className="pt-4 space-y-16">
        {/* WECHAT SECTION */}
        {(activeTab === 'all' || activeTab === 'wechat') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {activeTab === 'all' && (
              <h3 className="text-2xl font-display font-black flex items-center gap-2 border-b-2 border-black pb-2">
                <span className="w-4 h-4 rounded-full bg-neo-green border-2 border-black"></span>
                有路公众号10w+推文
              </h3>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wechatArticlesData.map((article, idx) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white border-3 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  <div className="h-64 sm:h-72 overflow-hidden border-b-3 border-black relative bg-[#FAFAF9] flex items-center justify-center p-2">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    />
                    <div className="absolute top-3 left-3 bg-neo-green text-black text-[10px] font-bold px-2 py-1 border-2 border-black rounded-md flex items-center gap-1 z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <FileText className="w-3 h-3" />
                      10W+ 推文
                    </div>
                  </div>
                  <div className="p-5 flex flex-col justify-between h-[140px] bg-white">
                    <h3 className="font-display font-black text-lg leading-tight group-hover:text-neo-pink transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-xs font-bold text-gray-500 uppercase mt-4">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      点击阅读原文
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* XIAOHONGSHU SECTION */}
        {(activeTab === 'all' || activeTab === 'xiaohongshu') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Articles */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-black flex items-center gap-2 border-b-2 border-black pb-2">
                <span className="w-4 h-4 rounded-full bg-neo-pink border-2 border-black"></span>
                小红书图文
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {xiaohongshuData.filter(item => item.type === 'article').map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row bg-[#FAFAF9] border-3 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <div className="sm:w-2/5 h-64 sm:h-auto border-b-3 sm:border-b-0 sm:border-r-3 border-black overflow-hidden relative flex items-center justify-center bg-white p-2">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                      />
                    </div>
                    <div className="p-5 sm:w-3/5 flex flex-col justify-center space-y-4">
                      <h4 className="font-display font-black text-lg leading-tight group-hover:underline decoration-neo-pink decoration-2">
                        {item.title}
                      </h4>
                      <div className="inline-flex items-center gap-1 text-xs font-mono font-bold bg-white border-2 border-black rounded-full px-3 py-1 w-max">
                        <FileText className="w-3.5 h-3.5 text-neo-pink" />
                        查看图文
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Videos */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-black flex items-center gap-2 border-b-2 border-black pb-2">
                <span className="w-4 h-4 rounded-full bg-neo-blue border-2 border-black"></span>
                小红书视频
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {xiaohongshuData.filter(item => item.type === 'video').map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white border-3 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    <div className="aspect-[3/4] md:aspect-[9/16] overflow-hidden border-b-3 border-black relative bg-[#FAFAF9]">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <div className="w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                          <Video className="w-5 h-5 text-neo-blue fill-neo-blue" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-neo-blue text-white">
                      <h4 className="font-display font-bold text-sm leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* BRAND PROMOTION SECTION */}
        {(activeTab === 'all' || activeTab === 'brand') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-neo-purple text-white p-6 md:p-8 rounded-2xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl sm:text-3xl font-display font-black mb-2">线下展会推广成果</h3>
              <p className="font-medium text-sm sm:text-base opacity-90">
                “发条屋”品牌在各大国际玩具及婴童用品展的精彩亮相与推广。
              </p>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {brandPromotionsData.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="break-inside-avoid bg-white border-3 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="relative overflow-hidden border-b-3 border-black bg-[#FAFAF9] flex items-center justify-center p-2">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full max-h-[500px] object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-md"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="font-display font-black text-sm sm:text-base text-black">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
