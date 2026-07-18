import React from 'react';
import { motion } from 'motion/react';
import { Mail, Briefcase, Sparkles, ArrowRight, User, FileText } from 'lucide-react';
import { AvatarMain, WebDesignServiceIcon, UIUXServiceIcon, ProductDesignServiceIcon, AvatarCircleLaptop, BrandPromotionServiceIcon } from './SVGIcons';
import { servicesData } from '../data';

interface HomeSectionProps {
  onSwitchTab: (tab: 'home' | 'about' | 'articles' | 'portfolio', section?: string) => void;
  onOpenContact: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onSwitchTab, onOpenContact }) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'web':
        return <WebDesignServiceIcon className="h-44" />;
      case 'uiux':
        return <UIUXServiceIcon className="h-44" />;
      case 'brand':
        return <BrandPromotionServiceIcon className="h-44" />;
      default:
        return <WebDesignServiceIcon className="h-44" />;
    }
  };
  return (
    <div className="space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
        {/* Left hero text block */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neo-yellow text-black border-2 border-black rounded-full font-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            品牌策划/文案策划/内容运营/新媒体运营等
          </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-[1.1] tracking-tight text-black">
              我是 <span className="neo-highlight-pink text-white">程诗恩</span>, <br />
              5年 <span className="neo-highlight-blue text-white">内容策划与运营</span> <br />
              经验
            </h1>
          </motion.div>

          <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-sm sm:text-base font-medium text-gray-600 max-w-xl leading-7 sm:leading-8 text-justify"
            >
            具备较强的文字功底、内容策划能力；新媒体平台营销推广能力，有效促进用户转化，提高销售效果。沟通能力强，能高效地推进项目进度，擅于从用户的需求出发解决问题，内外部沟通协作顺畅。互联网重度用户，对热点话题有高度敏感性，能快速捕捉及巧妙结合热点进行内容策划，并通过数据分析复盘内容效果，进行策略优化。
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button 
              onClick={onOpenContact} 
              className="neo-btn-black"
              id="hero-contact-btn"
            >
              <Mail className="w-4.5 h-4.5" />
              请联系我
            </button>
            
            <button 
              onClick={() => onSwitchTab('portfolio')} 
              className="neo-btn"
              id="hero-portfolio-btn"
            >
              <Briefcase className="w-4.5 h-4.5" />
              查看作品集
            </button>
            
            <button 
              onClick={() => onSwitchTab('articles')} 
              className="neo-btn"
              id="hero-articles-btn"
            >
              <FileText className="w-4.5 h-4.5" />
              查看文章
            </button>
          </motion.div>
        </div>

        {/* Right avatar illustration block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, duration: 0.6, type: 'spring', stiffness: 100 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="w-full max-w-sm aspect-square bg-black rounded-[40px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group">
            {/* The custom SVG Avatar */}
            <div className="absolute inset-0 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              <AvatarMain className="rounded-[40px]" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-widest">
              我的 <span className="neo-highlight-pink text-white px-2 py-1 tracking-widest">专业能力</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-600">
              深耕内容创作，全链路运营，结合产品属性制定品牌推广策略。
            </p>
          </div>
        </motion.div>

        {/* Grid of services cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className="neo-card-static flex flex-col p-0 overflow-hidden group hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="bg-[#EDEDEB] p-6 border-b-2 border-black flex items-center justify-center relative">
                {renderIcon(service.iconType)}
                <div className={`absolute top-4 right-4 w-4 h-4 rounded-full border border-black bg-neo-${service.accentColor}`} />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold">{service.title}</h3>
                  <p className="text-sm font-medium text-gray-600 leading-relaxed text-justify">
                    {service.description}
                  </p>
                </div>
                <div 
                  onClick={() => {
                    if (service.id === 'srv-1') {
                      onSwitchTab('articles');
                    } else if (service.id === 'srv-2') {
                      onSwitchTab('portfolio');
                    } else if (service.id === 'srv-3') {
                      onSwitchTab('portfolio', 'brand');
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-black uppercase text-black hover:underline cursor-pointer pt-2"
                >
                  查看详情 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. WHO IS BEHIND ALL THIS */}
      <section className="grid grid-cols-1 gap-12 items-center bg-[#F7F7F6] border-2 border-black rounded-3xl p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {/* Info metrics block */}
        <div className="space-y-6">
          <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed text-justify">
            从业以来，我一直从事品牌内容与运营相关工作。通过持续输出优质内容，依托多渠道全域分发，有效提高品牌传播力与影响力。
            <br /><br />
            我关注内容，也关注视觉；关注传播，也关注长期价值。希望借助文字与创意，让内容传递品牌独有调性，沉淀用户信任，以长效内容提高品牌核心竞争力。
          </p>

          {/* List metrics indicators */}
          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 mt-1 shrink-0 rounded-md border-2 border-black bg-neo-purple shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-display leading-tight">5年+运营人</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  线上+线下整合营销推广，新媒体矩阵搭建，内容运营、电商运营等。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 mt-1 shrink-0 rounded-md border-2 border-black bg-neo-pink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-display leading-tight">资深内容创作者</h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  擅长多类型文案撰写：品牌新媒体内容、创意slogan、用户故事、新闻稿件等。
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => onSwitchTab('about')} 
              className="neo-btn-black text-sm"
              id="who-behind-about-btn"
            >
              <User className="w-4 h-4" />
              关于我
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
