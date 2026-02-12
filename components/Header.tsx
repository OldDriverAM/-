
import React from 'react';

const Header: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 glass shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
        <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-laptop text-white text-xs"></i>
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">萧叶的水滴筹</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#story" 
            onClick={scrollToTop}
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            项目初衷
          </a>
          <a 
            href="#donors" 
            className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            致谢名单
          </a>
          <a 
            href="#donate-section"
            className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95"
          >
            立即支持
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
