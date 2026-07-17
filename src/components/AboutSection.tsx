import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Award, Layers, Compass, Printer, X, Sparkles } from 'lucide-react';
import { experienceData } from '../data';

interface AboutSectionProps {
  onOpenContact: () => void;
  onSwitchTab?: (tab: 'about' | 'portfolio' | 'articles', section?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact, onSwitchTab }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string | null>('figma');

  const creativePhilosophy = [
    {
      title: "Tactile Affordances",
      desc: "Every button should feel solid, clickable, and behave predictably. We avoid flat, transparent ghost buttons that look neat but fail physical usability tests.",
      icon: <Layers className="w-5 h-5 text-[#FF6B7A]" />
    },
    {
      title: "Accessibility as Default",
      desc: "We prioritize 21:1 pure black text contrast so anyone can read our products anywhere—on high-end workstation screens or outside under blazing sunlight.",
      icon: <Compass className="w-5 h-5 text-[#3B82F6]" />
    },
    {
      title: "Zero UI Distraction",
      desc: "No mock terminal logs, fake system status lines, or random glowing telemetry. We build content that users care about—without the structural noise.",
      icon: <Award className="w-5 h-5 text-[#FFD214]" />
    }
  ];

  const toolsStack = [
    { id: 'figma', name: 'Microsoft Office', category: '办公软件', why: '熟练掌握 Microsoft Office 办公软件，包括 Word 的文档排版与编辑、Excel的数据处理与分析、PowerPoint 的演示文稿制作，能够高效地完成各类办公任务，为工作的顺利开展提供有力支持。', color: 'bg-neo-pink' },
    { id: 'react', name: '秀米、135编辑器', category: '排版工具', why: '熟练使用秀米、135编辑器等排版工具，能进行精美的图文排版，提升文章视觉效果，并且能独立完成简单的海报、配图等视觉设计工作，满足日常运营的视觉需求。', color: 'bg-neo-blue' },
    { id: 'tailwind', name: 'Canva、稿定设计', category: '设计工具', why: '熟练使用 Canva、稿定设计等在线设计平台，能够快速产出符合品牌调性的宣传海报、长图及社交媒体配图，高效响应营销节点的设计需求。', color: 'bg-neo-green' },
    { id: 'motion', name: '剪映', category: '视频剪辑', why: '熟练掌握剪映等视频剪辑工具，具备视频策划、剪辑、字幕包装及基础特效制作能力，能够独立完成短视频的创作与分发。', color: 'bg-neo-purple' },
    { id: 'inkscape', name: '英语（CET-6） / 粤语 / 普通话', category: '语言能力', why: '具备大学英语六级（CET-6）水平，能够熟练进行英文资料查阅与日常交流；粤语为母语水平，普通话流利，能够适应多语言工作环境与跨地域沟通。', color: 'bg-neo-yellow' }
  ];

  return (
    <div className="space-y-24 pb-16 pt-8">
      {/* TIMELINE EXPERIENCE SECTION (Image 5 visual style match) */}
      <section className="space-y-12">
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-widest">
              我的 <span className="neo-highlight-blue text-white px-2 py-1 tracking-widest">工作经历</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-600">
              拥有5年以上内容&运营相关工作经验，擅长文案撰写、宣传推广；曾服务于广州蒸汽波文化发展有限公司、北京有路前行科技发展有限公司、广州市启风网络科技有限公司、《日本华侨报》等企业。
            </p>
          </div>
        </div>

        <div className="bg-black text-white border-3 border-black rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 gap-12">
          
          {/* Top section: Resume download button */}
          <div className="flex justify-center sm:justify-end">
            <a 
              href="/程诗恩-个人简历-可随时入职.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-bold bg-white text-black border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-[2px] transition-all cursor-pointer inline-flex items-center gap-2"
              id="view-resume-btn"
            >
              <FileText className="w-4.5 h-4.5" />
              查看完整版简历
            </a>
          </div>

          {/* Right side experience timeline list (Matches Image 5 Cards) */}
          <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <React.Fragment key={exp.id}>
              {index === 3 && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center py-4 my-2 relative group cursor-default"
                  >
                    <div className="h-0.5 w-full bg-black/10 rounded-full flex-1 group-hover:bg-black/20 transition-colors"></div>
                    <motion.span 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="mx-4 text-xs font-mono font-bold text-gray-400 uppercase tracking-widest px-3 py-1 bg-white border-2 border-black/10 rounded-full shadow-sm group-hover:border-black/30 group-hover:text-gray-600 transition-all duration-300"
                    >
                      其他相关经历
                    </motion.span>
                    <div className="h-0.5 w-full bg-black/10 rounded-full flex-1 group-hover:bg-black/20 transition-colors"></div>
                  </motion.div>
              )}
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-white text-black border-2 border-black rounded-2xl p-6 shadow-[5px_5px_0px_0px_rgba(255,255,255,0.95)] space-y-4 hover:translate-x-1 transition-transform relative group"
              >
                {/* Header inside experience card */}
                <div className="flex justify-between items-start border-b-2 border-black/10 pb-3">
                  <span className="text-xs sm:text-sm font-mono font-bold text-gray-500">
                    {exp.period}
                  </span>
                  
                  {/* Visual Circle Icon matching the screenshots */}
                  <div className={`w-8 h-8 rounded-full border-2 border-black ${exp.iconColor} flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-12 transition-transform`}>
                    {index % 2 === 0 ? (
                      // Rotation cycle symbol
                      <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    ) : (
                      // Four squares interlocked
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Role and Company */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-display font-black leading-tight text-black">
                    {exp.role}
                  </h3>
                  <span className="inline-block px-2 py-0.5 bg-neo-yellow text-xs font-mono font-bold border border-black rounded-sm">
                    {exp.company}
                  </span>
                </div>

                {/* description */}
                <div className="text-xs sm:text-sm font-medium text-gray-600 leading-6 sm:leading-relaxed space-y-1.5 sm:space-y-2 text-justify">
                            {exp.description.split('\n').map((line, i) => (
                              <p key={i}>{line}</p>
                            ))}
                          </div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
      </section>

      {/* MY DAILY TOOLSTACK */}
      <section className="space-y-12">
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-widest">
              我的 <span className="neo-highlight-pink text-white px-2 py-1 tracking-widest">专业技能</span>
            </h2>
            <p className="text-sm sm:text-base font-medium text-gray-600">
              熟练掌握各类办公、排版、设计与视频剪辑工具，并具备优秀的多语言沟通能力，为高品质内容产出与跨文化运营提供全面支撑。
            </p>
          </div>
        </div>

        {/* Split layout: left buttons, right display explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            {toolsStack.map((tool) => (
              <button
                key={tool.id}
                onClick={() => tool.why ? setSelectedTool(tool.id) : null}
                className={`w-full flex items-center justify-between p-4 border-2 border-black rounded-xl font-bold font-display ${tool.why ? 'cursor-pointer' : 'cursor-default'} select-none transition-all ${
                  selectedTool === tool.id 
                    ? `${tool.color} text-black translate-x-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]` 
                    : 'bg-white text-black hover:translate-x-0.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                <span className="text-lg">{tool.name}</span>
                <span className="text-xs font-mono font-medium opacity-70 uppercase tracking-widest">{tool.category}</span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {selectedTool && (
                <motion.div
                  key={selectedTool}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="neo-card-static bg-white p-6 md:p-8 space-y-4 min-h-[220px] flex flex-col justify-center"
                >
                  {(() => {
                    const t = toolsStack.find(x => x.id === selectedTool);
                    if (!t) return null;
                    return (
                      <>
                        <div className="flex justify-between items-center border-b-2 border-black pb-3">
                          <span className="text-xl font-display font-black tracking-wider uppercase">
                            {t.name}
                          </span>
                          <span className={`px-3 py-1 text-xs font-mono font-bold rounded-full border border-black ${t.color}`}>
                            {t.category}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-700 leading-relaxed text-justify">
                          {t.why}
                        </p>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PHYSICAL PAPER RESUME MODAL */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            {/* Backdrop click close */}
            <div className="absolute inset-0" onClick={() => setShowResumeModal(false)} />

            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-3 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10 z-10 space-y-8"
            >
              {/* Header controls */}
              <div className="flex justify-between items-center border-b-3 border-black pb-4 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-neo-yellow fill-neo-yellow" />
                  <span className="font-mono text-sm font-bold uppercase tracking-wider text-gray-500">DIGITAL CURRICULUM VITAE</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="p-2 border-2 border-black rounded-lg bg-neo-yellow hover:translate-y-[1px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center gap-2 text-xs font-bold"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print PDF</span>
                  </button>
                  <button 
                    onClick={() => setShowResumeModal(false)}
                    className="p-2 border-2 border-black rounded-lg bg-white hover:bg-neo-pink hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Printable sheet container */}
              <div className="space-y-8 pr-1 text-black print:p-0">
                {/* Header branding info */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="space-y-1">
                    <h1 className="text-3xl md:text-4xl font-display font-black uppercase">JOHN CARTER</h1>
                    <p className="text-base font-mono font-bold text-neo-pink uppercase tracking-wide">Mobile & Web Product Designer</p>
                  </div>
                  <div className="font-mono text-xs text-gray-600 space-y-1">
                    <p>🌐 sylviachengde@gmail.com</p>
                    <p>📍 Brooklyn, New York</p>
                    <p>💻 github.com/johncarter</p>
                  </div>
                </div>

                {/* Grid partition */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t-2 border-black">
                  {/* Left column info - Summary and skills */}
                  <div className="md:col-span-4 space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-sm uppercase tracking-widest text-neo-blue border-b border-black pb-1">SUMMARY</h3>
                      <p className="text-xs font-medium text-gray-600 leading-relaxed">
                        Creative product designer specialized in crafting highly tactile, resilient, accessible web and mobile frameworks using modern design tokens and neobrutalist paradigms.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-sm uppercase tracking-widest text-neo-blue border-b border-black pb-1">CORE SKILLS</h3>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {['UI/UX Design', 'Design Tokens', 'Figma Mastery', 'Web Development', 'React / TypeScript', 'Tailwind CSS', 'Vector Animation', 'SVG Production', 'WCAG AAA Contrast'].map(skill => (
                          <span key={skill} className="px-2 py-0.5 bg-[#FAFAF9] text-[10px] font-mono font-bold border border-black/30 rounded-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-sm uppercase tracking-widest text-neo-blue border-b border-black pb-1">EDUCATION</h3>
                      <div className="space-y-1 text-xs">
                        <p className="font-bold">BFA in Communication Design</p>
                        <p className="text-gray-500">Pratt Institute, NY</p>
                        <p className="text-[10px] font-mono">Class of 2014</p>
                      </div>
                    </div>
                  </div>

                  {/* Right column info - Experience timeline detail */}
                  <div className="md:col-span-8 space-y-6">
                    <h3 className="font-display font-bold text-sm uppercase tracking-widest text-neo-pink border-b border-black pb-1">PROFESSIONAL TIMELINE</h3>
                    
                    <div className="space-y-5">
                      {experienceData.map(exp => (
                        <div key={exp.id} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-sm">{exp.role}</span>
                            <span className="font-mono font-bold text-gray-500">{exp.period}</span>
                          </div>
                          <div className="text-xs font-mono text-neo-blue font-bold">
                            {exp.company}
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
