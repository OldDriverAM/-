
import React, { useState, useEffect } from 'react';
import { DonationTier, CrowdfundingStatus } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgressCard from './components/ProgressCard';
import DonationGrid from './components/DonationGrid';
import StorySection from './components/StorySection';
import PaymentModal from './components/PaymentModal';
import SupporterWall from './components/SupporterWall';
import Footer from './components/Footer';
import { GoogleGenAI } from "@google/genai";

const DONATION_TIERS: DonationTier[] = [
  { 
    amount: 20, 
    label: "微薄之力", 
    description: "一杯咖啡的关怀，让代码跑得更顺畅。", 
    icon: "☕",
    qrCode: "https://files.oaiusercontent.com/file-7S8X9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z" // 20元收款码
  },
  { 
    amount: 50, 
    label: "诚挚助力", 
    description: "一份午餐的支持，点亮新电脑的屏幕。", 
    icon: "🍕",
    qrCode: "https://files.oaiusercontent.com/file-8A9B0C1D2E3F4G5H6I7J8K9L" // 50元收款码
  },
  { 
    amount: 100, 
    label: "强力加持", 
    description: "一块固态的梦想，加速创造的每一个瞬间。", 
    icon: "🚀",
    qrCode: "https://files.oaiusercontent.com/file-M0N1O2P3Q4R5S6T7U8V9W0X1" // 100元收款码
  },
  { 
    amount: 200, 
    label: "终极梦想", 
    description: "一颗核心的跳动，成为萧叶最坚实的后盾。", 
    icon: "💎",
    qrCode: "https://files.oaiusercontent.com/file-Y2Z3A4B5C6D7E8F9G0H1I2J3" // 200元收款码
  },
];

const INITIAL_STATUS: CrowdfundingStatus = {
  target: 8000,
  current: 0,
  donorsCount: 0,
};

const App: React.FC = () => {
  const [status, setStatus] = useState<CrowdfundingStatus>(INITIAL_STATUS);
  // 支持者列表状态：新打赏的人会即时出现在这里
  const [supporters, setSupporters] = useState<{name: string, amount: number, date: string}[]>([]);
  const [selectedTier, setSelectedTier] = useState<DonationTier | null>(null);
  const [aiInspiration, setAiInspiration] = useState<string>("");

  useEffect(() => {
    const fetchInspiration = async () => {
      try {
        const apiKey = process.env.API_KEY || '';
        if (!apiKey) throw new Error("API Key missing");
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: '为“众筹萧叶新电脑计划”写一段简短、励志且感人的话，鼓励大家支持他的创作梦想。字数在50字左右。',
        });
        setAiInspiration(response.text || "您的每一份支持，都是通往星辰大海的动力。");
      } catch (error) {
        setAiInspiration("梦想不应被硬件束缚，感谢每一位同行者。");
      }
    };
    fetchInspiration();
  }, []);

  const handleDonate = (tier: DonationTier) => {
    setSelectedTier(tier);
  };

  const handleConfirmDonation = (amount: number, name: string) => {
    const finalName = name.trim() || "热心支持者";
    
    // 更新筹款总进度
    setStatus(prev => ({
      ...prev,
      current: prev.current + amount,
      donorsCount: prev.donorsCount + 1
    }));

    // 将新支持者添加到列表中（显示在致谢名单最上方）
    const now = new Date();
    const dateStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    setSupporters(prev => [
      { name: finalName, amount, date: `今天 ${dateStr}` },
      ...prev
    ]);

    setSelectedTier(null);

    // 自动滚动到致谢名单
    setTimeout(() => {
      const wall = document.getElementById('donors');
      wall?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-12 max-w-5xl">
        <Hero inspiration={aiInspiration} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <StorySection />
            <DonationGrid tiers={DONATION_TIERS} onSelect={handleDonate} />
            <SupporterWall supporters={supporters} />
          </div>
          
          <div className="space-y-8">
            <ProgressCard status={status} />
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
                <i className="fas fa-gift text-8xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                <i className="fas fa-stars text-yellow-300"></i>
                回馈计划
              </h3>
              <div className="space-y-4 text-indigo-50 text-sm leading-relaxed relative z-10">
                <p>
                  所有的支持者都将获得由萧叶亲自准备的<span className="font-bold text-white underline decoration-yellow-400 underline-offset-4">虚拟/实体纪念礼物</span>！
                </p>
                <p>
                  每一份心意都将被铭记，新电脑的第一行代码将献给所有在这里出现的朋友。
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <i className="fas fa-heart text-pink-400 animate-pulse"></i>
                <span className="text-xs font-medium uppercase tracking-wider">感谢你的支持</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {selectedTier && (
        <PaymentModal 
          tier={selectedTier} 
          onClose={() => setSelectedTier(null)} 
          onConfirm={handleConfirmDonation}
        />
      )}
    </div>
  );
};

export default App;
