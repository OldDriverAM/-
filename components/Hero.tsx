
import React from 'react';

interface HeroProps {
  inspiration: string;
}

const Hero: React.FC<HeroProps> = ({ inspiration }) => {
  return (
    <section className="text-center py-12 md:py-20">
      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
        Crowdfunding Project 2026
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
        众筹 <span className="gradient-text">萧叶新电脑</span> 计划
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed italic border-l-4 border-indigo-200 pl-4 py-2 bg-white rounded-r-lg shadow-sm">
        "{inspiration}"
      </p>
    </section>
  );
};

export default Hero;
