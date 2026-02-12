
import React, { useState } from 'react';
import { DonationTier } from '../types';

interface PaymentModalProps {
  tier: DonationTier;
  onClose: () => void;
  onConfirm: (amount: number, name: string) => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ tier, onClose, onConfirm }) => {
  const [step, setStep] = useState<'PAY' | 'NAME'>('PAY');
  const [nickname, setNickname] = useState('');

  const handleFinishedPaying = () => {
    setStep('NAME');
  };

  const handleFinalSubmit = () => {
    onConfirm(tier.amount, nickname);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        
        {step === 'PAY' ? (
          <div className="p-8 text-center">
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors z-10"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="mb-6">
              <span className="text-5xl mb-2 block">{tier.icon}</span>
              <h3 className="text-2xl font-black text-slate-900 uppercase">打赏确认</h3>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-indigo-600 font-black text-3xl">¥{tier.amount}</span>
                <span className="text-slate-400 text-sm font-medium">({tier.label})</span>
              </div>
            </div>

            {/* 二维码区域：直接使用您上传的图片链接 */}
            <div className="relative mx-auto w-full aspect-[3/4] max-w-[280px] bg-white rounded-3xl overflow-hidden mb-6 shadow-inner border border-slate-100">
              <img 
                src="https://r2.erweima.ai/i/05e61266b3f7.png" 
                alt="WeChat Payment QR Code" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-lg">
                <i className="fab fa-weixin"></i>
                微信支付
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 mb-6 text-sm text-slate-600 leading-relaxed border border-slate-100 text-left">
              <p><i className="fas fa-info-circle mr-2 text-indigo-500"></i>识别上方二维码完成支付后，请务必点击下方按钮登记名单。</p>
            </div>

            <button 
              onClick={handleFinishedPaying}
              className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 active:scale-95"
            >
              <span>我已完成支付</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        ) : (
          <div className="p-8 text-center animate-in slide-in-from-right duration-300">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-heart text-3xl"></i>
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 mb-2">支付成功！</h3>
            <p className="text-slate-500 text-sm mb-8 px-4">
              萧叶已收到您的心意。请问该如何在“致谢名单”中称呼您？
            </p>

            <div className="mb-8">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 text-left ml-2">
                支持者昵称
              </label>
              <input 
                type="text" 
                placeholder="留空显示为“热心支持者”"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                autoFocus
                className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-indigo-500 focus:outline-none transition-all text-slate-800 font-bold"
              />
            </div>

            <div className="flex gap-3">
              <button 
                onClick={handleFinalSubmit}
                className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all active:scale-95"
              >
                登记姓名
              </button>
              <button 
                onClick={() => onConfirm(tier.amount, "匿名支持者")}
                className="flex-1 bg-slate-100 text-slate-500 py-4 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95"
              >
                保持匿名
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
