
import React, { useState } from 'react';

const StorySection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="story" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-6 w-1 bg-indigo-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-slate-900">项目初衷</h2>
      </div>
      <div className="prose prose-slate max-w-none text-slate-600 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <p className="mb-4 text-lg font-medium text-slate-800">
          大家好，我是萧叶。
        </p>
        <p className="mb-4 leading-relaxed">
          想和大家说的话有很多，却不知道该用什么样的方式去说。索性就不去注意那些繁文缛节，随便唠叨几句。
        </p>
        <p className="mb-4 leading-relaxed">
          大家都知道萧叶手里目前的老古董的情况，卡顿掉帧都是家常便饭，习惯了。动不动耍耍大小姐脾气直接给你蓝屏重启都是常有的事，严重制约了萧叶的产出和创作灵感。
        </p>
        
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl mb-6">
          <p className="font-bold text-indigo-900 mb-2">关于回馈：</p>
          <p className="text-indigo-800 text-sm leading-relaxed">
            诸位的打赏统计，我都会按名次以“头条”的形式永久贴在形象的脑门上，直至新电脑报废（不太可能）。
          </p>
        </div>

        <div className="mt-8 relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-50 border-2 border-dashed border-slate-200 group flex items-center justify-center">
          {!imgError ? (
            <img 
              src="./sketch.png" 
              alt="目标配置概念图" 
              onError={() => setImgError(true)}
              className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.01]"
            />
          ) : (
            <div className="text-center p-6">
              <i className="fas fa-image text-4xl text-slate-300 mb-3 block"></i>
              <p className="text-slate-400 text-sm font-medium">请将手绘图命名为 sketch.png 放入项目根目录</p>
              <p className="text-slate-300 text-xs mt-1">（预览环境暂无法直接读取上传的文件）</p>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex flex-col justify-end p-6 pointer-events-none">
            <span className="text-white text-xs font-bold tracking-wider uppercase opacity-90 mb-1">目标配置</span>
            <span className="text-white text-lg font-bold">顶级直播工作站 · 拒绝蓝屏</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
