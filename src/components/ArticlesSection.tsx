import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, BookOpen, Globe } from 'lucide-react';
import { websitesData } from '../data';

const newspaperImages = import.meta.glob('../assets/articles/报纸*.png', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

export const ArticlesSection: React.FC = () => {
  const [featuredNewspaper, setFeaturedNewspaper] = useState<number>(2);
  const backgroundNewspapers = [1, 2, 3].filter(n => n !== featuredNewspaper);
  const getNewspaperImage = (index: number) => newspaperImages[`../assets/articles/报纸${index}.png`] ?? '';

  return (
    <div className="space-y-16 pb-16 pt-8">
      {/* HEADER SECTION */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tight leading-none">
          我的 <span className="neo-highlight-pink text-white px-2">文章合集</span>
        </h2>
        <p className="text-sm sm:text-base font-medium text-gray-600">
          拥有扎实的文字功底，长期深耕原创文字创作，具备极强的文字表达、内容输出及创意策划能力。
        </p>
      </div>

      {/* NEWSPAPER FEATURED SECTION */}
      <div className="space-y-12">
        <div className="relative w-full max-w-5xl mx-auto h-[650px] sm:h-[800px] my-16">
          {/* Background image (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => setFeaturedNewspaper(backgroundNewspapers[0])}
            className="absolute top-0 right-0 w-[70%] sm:w-[60%] h-[70%] bg-[#FAFAF9] border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-10 p-2 cursor-pointer hover:-translate-y-2 hover:translate-x-2 transition-transform duration-300"
            title="点击切换到前方展示"
          >
            <img 
              src={getNewspaperImage(backgroundNewspapers[0])} 
              alt={`报纸专栏 ${backgroundNewspapers[0]}`}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Foreground image (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => setFeaturedNewspaper(backgroundNewspapers[1])}
            className="absolute top-[15%] left-0 w-[65%] sm:w-[55%] h-[65%] bg-[#FAFAF9] border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20 p-2 cursor-pointer hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300"
            title="点击切换到前方展示"
          >
            <img 
              src={getNewspaperImage(backgroundNewspapers[1])} 
              alt={`报纸专栏 ${backgroundNewspapers[1]}`}
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Middle image / Text block (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-0 left-[5%] sm:left-[15%] w-[90%] sm:w-[60%] bg-neo-pink text-white border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-30 p-6 sm:p-8 flex flex-col"
          >
            <h4 className="text-2xl sm:text-3xl font-display font-black tracking-tight mb-4 uppercase">
              深度专栏报道
            </h4>
            <p className="text-sm sm:text-base font-medium opacity-90 leading-relaxed mb-6">
              多次在《日本华侨报》发表深度文章。观察社会现象、经济动态以及数据报告，通过扎实的文字功底，呈现出具有温度和深度的报道。（点击图片可切换阅读）
            </p>
            <div className="w-full h-64 sm:h-96 border-2 border-black bg-white p-2">
               <img 
                key={featuredNewspaper}
                src={getNewspaperImage(featuredNewspaper)} 
                alt={`报纸专栏 ${featuredNewspaper}`}
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* WEBSITES SECTION */}
      <div className="space-y-8 pt-8">
        <div className="flex items-center gap-3 border-b-3 border-black pb-4">
          <div className="w-10 h-10 rounded-xl bg-neo-blue border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-3xl font-display font-black tracking-tight text-black">
            更多稿件
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {websitesData.map((site, idx) => (
            <motion.a
              key={site.id}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.4 }}
              className="group block bg-white border-3 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col h-full"
            >
              <div className="h-40 bg-[#FAFAF9] flex items-center justify-center p-2 border-b-3 border-black relative">
                <img 
                  src={site.image} 
                  alt={`网站文章 ${idx + 1}`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                />
              </div>
              <div className="p-4 bg-white flex flex-col justify-between mt-auto space-y-3">
                <h4 className="font-display font-bold text-sm leading-snug line-clamp-2 group-hover:text-neo-blue transition-colors">
                  {site.title}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="flex items-center text-xs font-bold text-gray-500 uppercase group-hover:text-neo-blue transition-colors">
                    点击阅读全文 <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
