
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 mt-12">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
             <i className="fas fa-laptop text-white text-[10px]"></i>
          </div>
          <span className="font-bold text-slate-800">众筹萧叶新电脑计划</span>
        </div>
        
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-8">
          本页面仅用于个人创作支持，所有款项将透明公开。感谢每一位关注、转发和支持的朋友。
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-indigo-600 hover:text-white transition-all">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-green-500 hover:text-white transition-all">
            <i className="fab fa-weixin"></i>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-blue-400 hover:text-white transition-all">
            <i className="fab fa-weibo"></i>
          </a>
        </div>

        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          &copy; 2024 XIAOYE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
