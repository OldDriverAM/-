
import React from 'react';

interface SupporterWallProps {
  supporters: { name: string, amount: number, date: string }[];
}

const SupporterWall: React.FC<SupporterWallProps> = ({ supporters }) => {
  return (
    <section id="donors" className="space-y-6 scroll-mt-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-6 w-1 bg-indigo-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900">致谢名单</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            实时更新
          </span>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
        {supporters.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4 grayscale opacity-30">🤝</div>
            <p className="text-slate-400 font-medium">还没有人打赏，快来抢占头条吧！</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supporters.map((s, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 transition-all hover:bg-indigo-50 group animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-md group-hover:scale-110 transition-transform">
                    {s.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 truncate max-w-[120px]">{s.name}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">{s.date}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-indigo-600 font-black text-lg">
                    ¥{s.amount}
                  </div>
                  <div className="text-[9px] text-indigo-400 font-bold uppercase">已助力</div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-8 p-5 bg-slate-50 rounded-2xl text-center border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
            <i className="fas fa-quote-right text-4xl"></i>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed italic relative z-10">
            “每一份支持都是萧叶前进的燃料，名单将随新电脑一同见证未来的创作！”
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupporterWall;
