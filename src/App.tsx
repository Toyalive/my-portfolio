/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  FolderOpen, 
  User, 
  Layout, 
  Smartphone, 
  Watch, 
  ChevronDown, 
  Github, 
  Twitter, 
  Linkedin,
  ExternalLink,
  Code,
  ArrowLeft,
  Play,
  X
} from 'lucide-react';

type Tab = 'home' | 'about' | 'works' | 'resume' | 'project-detail';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-pink selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4 transition-all duration-300">
        <div className={`pill-nav justify-between transition-all duration-300 ${isScrolled ? 'opacity-60 hover:opacity-100 backdrop-blur-sm bg-white/80' : 'opacity-100'}`}>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border-4 border-brand-black flex items-center justify-center">
              <div className="w-2 h-2 bg-brand-black rounded-full" />
            </div>
          </div>
          
          <div className="flex md:hidden items-center gap-4 font-bold text-sm">
            <button 
              onClick={() => setActiveTab('home')}
              className={`hover:text-brand-pink transition-colors ${activeTab === 'home' ? 'text-brand-pink underline underline-offset-4' : ''}`}
            >
              首页
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`hover:text-brand-pink transition-colors ${activeTab === 'about' ? 'text-brand-pink underline underline-offset-4' : ''}`}
            >
              关于我
            </button>
            <button 
              onClick={() => setActiveTab('works')}
              className={`hover:text-brand-pink transition-colors ${activeTab === 'works' ? 'text-brand-pink underline underline-offset-4' : ''}`}
            >
              作品集
            </button>
          </div>

          <div className="hidden md:flex items-center gap-10 font-bold">
            <button 
              onClick={() => setActiveTab('home')}
              className={`hover:text-brand-pink transition-colors ${activeTab === 'home' ? 'text-brand-pink underline underline-offset-4' : ''}`}
            >
              首页
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`hover:text-brand-pink transition-colors ${activeTab === 'about' ? 'text-brand-pink underline underline-offset-4' : ''}`}
            >
              关于我
            </button>
            <button 
              onClick={() => setActiveTab('works')}
              className={`hover:text-brand-pink transition-colors ${activeTab === 'works' ? 'text-brand-pink underline underline-offset-4' : ''}`}
            >
              作品集
            </button>
          </div>

          <button className="bg-brand-black text-white p-2 rounded-lg brutal-shadow-hover hidden md:block">
            <Mail size={20} />
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 max-w-6xl mx-auto relative">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HomeSection onNavigate={setActiveTab} />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AboutSection onNavigate={setActiveTab} />
            </motion.div>
          )}

          {activeTab === 'works' && (
            <motion.div
              key="works"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <WorksSection onNavigate={setActiveTab} />
            </motion.div>
          )}

          {activeTab === 'resume' && (
            <motion.div
              key="resume"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ResumeSection onNavigate={setActiveTab} />
            </motion.div>
          )}

          {activeTab === 'project-detail' && (
            <motion.div
              key="project-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectDetailSection onNavigate={setActiveTab} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-brand-black py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-black text-2xl">
            <div className="w-10 h-10 rounded-full border-4 border-brand-black flex items-center justify-center">
              <div className="w-3 h-3 bg-brand-black rounded-full" />
            </div>
            LU WAN ZE
          </div>
      
          <div className="flex gap-6">
            <a href="#" className="brutal-btn-secondary p-3"><Twitter /></a>
            <a href="#" className="brutal-btn-secondary p-3"><Github /></a>
            <a href="#" className="brutal-btn-secondary p-3"><Linkedin /></a>
          </div>
          <p className="font-bold">© 2026 Ken. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
}

function HomeSection({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight">
              我是<span className="bg-brand-pink text-white px-4 inline-block transform -rotate-1 mt-2 sm:mt-0">卢万泽</span>, 
              <br className="hidden sm:block" />
              欢迎来到 <span className="bg-brand-blue text-white px-4 inline-block transform rotate-1 mt-2 sm:mt-0">我的个人网站</span> 
            </h1>
          <p className="text-xl text-gray-600 max-w-md leading-relaxed">
            专注于创造独特且具有冲击力的视觉体验，致力于将创意转化为卓越的数字产品。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('about')}
              className="brutal-btn-primary w-full sm:w-auto justify-center"
            >
              <Mail size={20} /> 个人资料
            </button>
            <button 
              onClick={() => onNavigate('works')}
              className="brutal-btn-secondary w-full sm:w-auto justify-center"
            >
              <FolderOpen size={20} /> 查看作品
            </button>
          </div>
        </div>
        <div className="relative order-1 md:order-2 mb-8 md:mb-0 w-3/4 sm:w-full mx-auto">
          <motion.div 
            className="brutal-card bg-brand-yellow p-0 overflow-hidden aspect-square flex items-end justify-center"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
             {/* Mock Illustration */}
             <div className="w-full h-full relative flex items-end justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
                <img 
                  src="/src/icon.png" 
                  alt="John Carter" 
                  className="w-full h-full object-cover z-10"
                  referrerPolicy="no-referrer"
                />
             </div>
          </motion.div>
        </div>
      </div>

      {/* Services/Features */}
      <div className="text-center space-y-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
          我提供的 <span className="bg-brand-pink text-white px-4 inline-block mt-2 sm:mt-0">多元化服务</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          凭借多年的行业经验，我能够为客户提供从概念设计到最终落地的全方位支持。
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Layout className="text-brand-blue" size={40} />} 
            title="网页设计" 
            desc="打造响应式、高性能且视觉出众的网页，提升品牌在线形象。"
          />
          <ServiceCard 
            icon={<Smartphone className="text-brand-pink" size={40} />} 
            title="UI/UX 设计" 
            desc="以用户为中心，设计直观且易于使用的交互界面，优化用户体验。"
          />
          <ServiceCard 
            icon={<Watch className="text-brand-yellow" size={40} />} 
            title="产品设计" 
            desc="从产品策略到视觉呈现，全方位打磨产品细节，创造商业价值。"
          />
        </div>
      </div>
    </div>
  );
}

function AboutSection({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  return (
        <div className="grid md:grid-cols-2 gap-16 items-center mt-12 md:mt-0">
        <div className="relative max-w-md mx-auto w-4/5 order-1 md:order-none">
          <motion.div 
            className="brutal-card bg-brand-yellow p-0 overflow-hidden aspect-square rounded-full flex items-center justify-center border-4 border-brand-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              rotate: 5,
              boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)"
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)"
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 15 
            }}
          >
            <div className="w-full h-full relative flex items-center justify-center rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
              <img 
                src="/src/icon.png" 
                alt="About John" 
                className="w-full h-full object-cover z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <div className="absolute -bottom-8 -right-8 bg-brand-yellow brutal-border p-4 rounded-2xl brutal-shadow font-black text-xl z-20">
          2年工作经验
        </div>
      </div>
      <div className="space-y-8 order-2 md:order-none">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
          这些杰作的 <span className="bg-brand-blue text-white px-4 inline-block mt-2 sm:mt-0">幕后推手</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          我是一名热衷于探索设计边界的创意人，始终坚持用设计解决问题，为用户创造惊喜。
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-brand-blue brutal-border mt-1" />
            <div>
              <h4 className="font-black text-xl">深耕内容运营</h4>
              <p className="text-gray-600">深耕设计领域多年，积累了丰富的实战经验和敏锐的审美洞察力。</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded bg-brand-pink brutal-border mt-1" />
            <div>
              <h4 className="font-black text-xl">100+ 个成功项目</h4>
              <p className="text-gray-600">已成功助力百余家企业实现数字化转型，赢得了客户的广泛信赖。</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => onNavigate('resume')}
          className="brutal-btn-primary w-full sm:w-auto justify-center"
        >
          <User size={20} /> 了解更多
        </button>
      </div>
    </div>
  );
}

function ResumeSection({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  return (
    <div className="space-y-12 relative mt-8 sm:mt-0">
      <button 
        onClick={() => onNavigate('about')}
        className="absolute -top-20 sm:-top-16 left-0 brutal-btn-secondary p-3 flex items-center gap-2 group z-10"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
        <span className="font-bold hidden sm:inline">返回</span>
      </button>

      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">我的 <span className="bg-brand-pink px-4 text-white inline-block mt-2 sm:mt-0">个人简历</span></h2>
        <p className="text-gray-600 max-w-xl mx-auto">了解我的教育背景、工作经历以及专业技能。</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Education */}
        <div className="brutal-card space-y-8">
          <div className="flex items-center gap-4 border-b-4 border-brand-black pb-4">
            <div className="w-12 h-12 bg-brand-yellow brutal-border rounded-xl flex items-center justify-center">
              <Code size={24} />
            </div>
            <h3 className="text-3xl font-black">教育背景</h3>
          </div>
          
          <div className="space-y-6">
            <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-1 before:bg-brand-black">
              <div className="absolute left-0 top-2 w-6 h-6 bg-brand-pink brutal-border rounded-full z-10" />
              <div className="space-y-2">
                <span className="inline-block bg-brand-black text-white px-3 py-1 font-bold text-sm rounded-md">2016 - 2020</span>
                <h4 className="text-xl font-black">设计学士学位</h4>
                <p className="font-bold text-gray-800">纽约视觉艺术学院</p>
                <p className="text-gray-600">主修交互设计与视觉传达，在校期间多次获得设计比赛金奖。</p>
              </div>
            </div>
            <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-1 before:bg-brand-black">
              <div className="absolute left-0 top-2 w-6 h-6 bg-brand-blue brutal-border rounded-full z-10" />
              <div className="space-y-2">
                <span className="inline-block bg-brand-black text-white px-3 py-1 font-bold text-sm rounded-md">2020 - 2022</span>
                <h4 className="text-xl font-black">人机交互硕士学位</h4>
                <p className="font-bold text-gray-800">卡内基梅隆大学</p>
                <p className="text-gray-600">专注于用户体验研究与前沿交互技术探索。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="brutal-card space-y-8">
          <div className="flex items-center gap-4 border-b-4 border-brand-black pb-4">
            <div className="w-12 h-12 bg-brand-blue brutal-border rounded-xl flex items-center justify-center">
              <Code size={24} />
            </div>
            <h3 className="text-3xl font-black">工作经历</h3>
          </div>
          
          <div className="space-y-6">
            <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-1 before:bg-brand-black">
              <div className="absolute left-0 top-2 w-6 h-6 bg-brand-yellow brutal-border rounded-full z-10" />
              <div className="space-y-2">
                <span className="inline-block bg-brand-black text-white px-3 py-1 font-bold text-sm rounded-md">2022 - 至今</span>
                <h4 className="text-xl font-black">高级 UI/UX 设计师</h4>
                <p className="font-bold text-gray-800">TechCorp 科技</p>
                <p className="text-gray-600">主导公司核心产品的设计系统重构，提升了 40% 的用户留存率。</p>
              </div>
            </div>
            <div className="relative pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-1 before:bg-brand-black">
              <div className="absolute left-0 top-2 w-6 h-6 bg-brand-pink brutal-border rounded-full z-10" />
              <div className="space-y-2">
                <span className="inline-block bg-brand-black text-white px-3 py-1 font-bold text-sm rounded-md">2020 - 2022</span>
                <h4 className="text-xl font-black">产品设计师</h4>
                <p className="font-bold text-gray-800">CreativeStudio 创新工坊</p>
                <p className="text-gray-600">参与多个 0-1 创新项目的设计与落地，负责跨端体验一致性。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="brutal-card space-y-8">
        <h3 className="text-3xl font-black text-center border-b-4 border-brand-black pb-4">专业技能</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {['Figma', 'Sketch', 'Adobe Creative Suite', 'HTML/CSS', 'React', 'Prototyping', 'User Research', 'Design Systems', 'Webflow', 'Framer'].map((skill, index) => (
            <span key={index} className={`brutal-border px-6 py-3 rounded-full font-bold text-lg brutal-shadow-hover cursor-default ${['bg-brand-yellow', 'bg-brand-pink', 'bg-brand-blue', 'bg-white'][index % 4]}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorksSection({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  const projects = [
    { title: "电商作品集", category: "网页设计", color: "bg-brand-blue", image: "https://picsum.photos/seed/web1/800/600" },
    { title: "下次再来就会更新了噢", category: "欢迎", color: "bg-brand-pink", image: "https://picsum.photos/seed/app1/800/600" },
    { title: "下次再来就会更新了噢", category: "欢迎", color: "bg-brand-yellow", image: "https://picsum.photos/seed/brand1/800/600" },
    { title: "下次再来就会更新了噢", category: "欢迎", color: "bg-brand-blue", image: "https://picsum.photos/seed/dash1/800/600" },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">我的 <span className="bg-brand-yellow px-4 inline-block mt-2 sm:mt-0">作品集</span></h2>
        <p className="text-gray-600 max-w-xl mx-auto">精选了近年来我参与的一些项目成果，涵盖了从个人项目到工作经历。</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            onClick={() => {
              // 只有当点击的是“电商平台重构”（或“电商作品集”）时才跳转
              if (project.title.includes('电商')) {
                onNavigate('project-detail');
              }
            }}
            className={`brutal-card p-0 overflow-hidden group ${project.title.includes('电商') ? 'cursor-pointer' : ''}`}
          >
            <div className={`h-64 ${project.color} border-b-2 border-brand-black relative overflow-hidden`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-white brutal-border px-3 py-1 rounded-full font-bold text-sm brutal-shadow">
                  {project.category}
                </div>
              </div>
            </div>
            <div className="p-6 flex justify-between items-center bg-white">
              <div>
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="text-gray-500 font-bold">2026</p>
              </div>
              <button className="brutal-btn-secondary p-3">
                <ExternalLink size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="brutal-card bg-brand-yellow flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-black">你还想了解什么东西吗？</h3>
          <p className="font-bold">让我们一起创造一些了不起的东西。</p>
        </div>
        <button className="brutal-btn-primary text-xl px-10 py-5 w-full md:w-auto justify-center">
          <Code size={24} /> 戳我！
        </button>
      </div>
    </div>
  );
}

function ProjectDetailSection({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/src/gmv.png", title: "GMV" },
    { src: "/src/bfl.jpg", title: "账号播放量" },
    { src: "/src/ks.jpg", title: "运营公司的快手账号" },
    { src: "/src/dy.jpg", title: "运营公司的抖音账号" },
  ];

  return (
    <div className="space-y-12 relative mt-8 sm:mt-0">
      <button 
        onClick={() => onNavigate('works')}
        className="absolute -top-20 sm:-top-16 left-0 brutal-btn-secondary p-3 flex items-center gap-2 group z-10"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
        <span className="font-bold hidden sm:inline">返回作品集</span>
      </button>

      {/* Project Header */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-black leading-tight">
          各个平台的<span className="bg-brand-yellow px-4 inline-block mt-2 sm:mt-0">作品集</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
          目前正在努力完善中~~
        </p>
      </div>

      {/* Image Gallery */}
      <div className="space-y-8">
        <h3 className="text-3xl font-black text-left border-b-4 border-brand-black pb-4 inline-block">核心数据表现</h3>
        {/* 使用 columns 实现瀑布流布局（Masonry Layout），增加列数，缩小图片 */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid space-y-3 mb-6">
              <div 
                className={`brutal-card p-0 overflow-hidden relative flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-transform brutal-shadow-hover group ${['bg-[#f0f0f0]', 'bg-[#e5e5e5]', 'bg-[#d4d4d4]', 'bg-[#f5f5f5]'][idx % 4]}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="absolute inset-0 bg-[radial-gradient(#00000011_1px,transparent_1px)] [background-size:10px_10px]"></div>
                
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center justify-center gap-2 px-2">
                <div className={`w-2.5 h-2.5 rounded-full brutal-border flex-shrink-0 ${['bg-brand-yellow', 'bg-brand-pink', 'bg-brand-blue', 'bg-brand-yellow'][idx % 4]}`} />
                <h4 className="text-base sm:text-lg font-black truncate">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-brand-yellow transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain brutal-border rounded-2xl shadow-[16px_16px_0px_0px_rgba(255,193,7,1)] cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Details */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h3 className="text-3xl font-black border-b-4 border-brand-black pb-4 inline-block">项目挑战</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            现有的健身应用往往界面繁杂，数据展示枯燥。我们的挑战在于如何在保持专业数据准确性的同时，注入年轻化的视觉元素，降低用户的认知负担，并通过游戏化的交互设计提升用户粘性。
          </p>
        </div>
        <div className="brutal-card bg-brand-blue text-white space-y-4">
          <div>
            <h4 className="font-black text-xl mb-1">角色</h4>
            <p className="font-bold opacity-90">主视觉设计师</p>
          </div>
          <div>
            <h4 className="font-black text-xl mb-1">周期</h4>
            <p className="font-bold opacity-90">3 个月</p>
          </div>
          <div>
            <h4 className="font-black text-xl mb-1">工具</h4>
            <p className="font-bold opacity-90">Figma, Protopie</p>
          </div>
        </div>
      </div>

      {/* Video Presentation Gallery */}
      <div className="space-y-8">
        <h3 className="text-3xl font-black border-b-4 border-brand-black pb-4 inline-block">动态展示</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "核心交互演示", color: "bg-brand-yellow", videoSrc: "src/video1.mp4", poster: "" },
            { title: "动效细节展示", color: "bg-brand-pink", videoSrc: "src/video2.mp4", poster: "" },
            { title: "用户流程演示", color: "bg-brand-blue", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://picsum.photos/seed/video2/800/600" },
            { title: "数据可视化动效", color: "bg-brand-yellow", videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://picsum.photos/seed/video3/800/600" }
          ].map((video, idx) => {
            const [isPlaying, setIsPlaying] = useState(false);
            
            return (
              <div key={idx} className="space-y-4">
                <div 
                  className={`brutal-card p-0 overflow-hidden ${video.color} relative aspect-video flex items-center justify-center group cursor-pointer brutal-shadow-hover`}
                  onClick={(e) => {
                    const videoEl = e.currentTarget.querySelector('video');
                    if (videoEl) {
                      if (videoEl.paused) {
                        videoEl.play();
                        setIsPlaying(true);
                      } else {
                        videoEl.pause();
                        setIsPlaying(false);
                      }
                    }
                  }}
                >
                  <div className={`absolute inset-0 bg-[radial-gradient(#00000033_1px,transparent_1px)] [background-size:20px_20px] opacity-20 ${isPlaying ? 'hidden' : 'block'}`}></div>
                  
                  <video 
                    className="w-full h-full object-cover relative z-0"
                    poster={video.poster}
                    src={video.videoSrc}
                    loop
                    playsInline
                    onEnded={() => setIsPlaying(false)}
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                    您的浏览器不支持视频播放。
                  </video>

                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full brutal-border flex items-center justify-center group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <Play size={24} className="ml-1 text-brand-black" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-black px-2">{video.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="brutal-card text-left flex flex-col gap-6 brutal-shadow-hover">
      <div className="w-16 h-16 brutal-border rounded-2xl flex items-center justify-center bg-gray-50">
        {icon}
      </div>
      <div className="space-y-2">
        <h4 className="text-2xl font-black">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
