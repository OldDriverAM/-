
import React from 'react';
import { CrowdfundingStatus } from '../types';

interface ProgressCardProps {
  status: CrowdfundingStatus;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ status }) => {
  const percentage = Math.min(Math.round((status.current / status.target) * 100), 100);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
      <div className="mb-6">
        <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">筹款进度</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-slate-900">¥{status.current.toLocaleString()}</span>
          <span className="text-slate-400 font-medium">/ ¥{status.target.toLocaleString()}</span>
        </div>
      </div>

      <div className="relative w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-6">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 rounded-2xl p-4 text-center">
          <div className="text-xl font-bold text-slate-900">{percentage}%</div>
          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">完成率</div>
        </div>
        <div className="bg-slate-50 rounded-2xl p-4 text-center">
          <div className="text-xl font-bold text-slate-900">{status.donorsCount}</div>
          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">支持者</div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-slate-400 italic">
          项目截止日期：2024年12月31日
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
