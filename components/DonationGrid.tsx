
import React from 'react';
import { DonationTier } from '../types';

interface DonationGridProps {
  tiers: DonationTier[];
  onSelect: (tier: DonationTier) => void;
}

const DonationGrid: React.FC<DonationGridProps> = ({ tiers, onSelect }) => {
  return (
    <div id="donate-section" className="space-y-6 scroll-mt-20">
      <div className="flex items-center gap-3">
        <div className="h-6 w-1 bg-indigo-600 rounded-full"></div>
        <h2 className="text-2xl font-bold text-slate-900">选择打赏金额</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tiers.map((tier) => (
          <button
            key={tier.amount}
            onClick={() => onSelect(tier)}
            className="group relative flex flex-col items-start p-6 bg-white border-2 border-slate-100 rounded-3xl text-left transition-all hover:border-indigo-600 hover:shadow-2xl active:scale-95"
          >
            <div className="flex justify-between items-start w-full mb-4">
              <span className="text-3xl group-hover:scale-125 transition-transform">{tier.icon}</span>
              <span className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">¥{tier.amount}</span>
            </div>
            <h4 className="font-bold text-slate-800 mb-1">{tier.label}</h4>
            <p className="text-sm text-slate-500 leading-snug">{tier.description}</p>
            
            <div className="mt-4 flex items-center text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>立即扫码打赏</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DonationGrid;
