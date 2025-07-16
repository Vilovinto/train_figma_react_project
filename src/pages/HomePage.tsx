import React, { useState } from 'react';
import logoPerson from '../assets/images/logo-person.png';
import logoText from '../assets/images/logo-text.png';
import questionIcon from '../assets/images/question.png';
import userIcon from '../assets/images/user.png';
import editIcon from '../assets/images/edit.png';
import tableIcon from '../assets/images/table.png';

const HomePage = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="min-h-screen w-full bg-[#FBF8F4] flex flex-row relative overflow-hidden">
      {/* Sidebar */}
      <aside className="h-screen flex flex-col justify-between z-20" style={{width: 320, minWidth: 220, maxWidth: 320, borderRight: '1px solid rgba(206,206,206,0.6)', background: 'transparent'}}>
        {/* Top: логотип + кнопки (як у Figma) */}
        <div className="flex flex-row items-center justify-between" style={{width: 272, height: 64, marginTop: 32, marginLeft: 24}}>
          {/* Логотип */}
          <div className="flex flex-col items-center justify-center" style={{width: 70}}>
            <img src={logoPerson} alt="Logo Person" className="h-[43px] w-[16px] object-contain mx-auto" />
            <img src={logoText} alt="Dalmar Labs" className="h-[20px] w-[70px] object-contain mx-auto mt-1" />
          </div>
          {/* Кнопки */}
          <div className="flex flex-row items-center gap-3" style={{width: 60, height: 24, position: 'relative'}}>
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center z-40" style={{pointerEvents: 'none'}}>
                <div className="bg-[#E5E5E5] text-black text-[24px] font-inter font-normal px-6 py-2 rounded-[12px]" style={{textAlign: 'center', letterSpacing: 0, fontWeight: 400, fontFamily: 'Inter, sans-serif', opacity: 1}}>
                  Create New Chat
                </div>
                <div style={{width: 24, height: 12, marginTop: '-2px', display: 'flex', justifyContent: 'center'}}>
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C12 12 18 0 24 0H0C6 0 12 12 12 12Z" fill="#E5E5E5"/>
                  </svg>
                </div>
              </div>
            )}
            <button
              className="w-6 h-6 flex items-center justify-center p-0 bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent"
              style={{outline: 'none'}}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
            >
              <img src={editIcon} alt="Edit" className="w-6 h-6 object-contain" />
            </button>
            <button className="w-6 h-6 flex items-center justify-center p-0 bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent" style={{outline: 'none'}}>
              <img src={tableIcon} alt="Table" className="w-6 h-6 object-contain" />
            </button>
          </div>
        </div>
        {/* Bottom: інші елементи */}
        <div className="flex flex-col gap-6 px-6 pb-6">
          <button className="w-full flex items-center justify-center gap-2 bg-[#F6F6F6] hover:bg-[#F0ECE6] rounded-lg py-2 px-3 text-[15px] font-medium text-black border border-[#E5E5E5] mb-2 transition">
            <span className="material-icons text-[20px]">add</span>
            Create New Chat
          </button>
          <nav className="flex flex-col gap-1 mt-2">
            <button className="flex items-center gap-3 px-2 py-2 rounded-lg text-[16px] font-normal text-[#222] hover:bg-[#F6F6F6] transition">
              <span className="material-icons text-[20px]">history</span>
              Chat history
            </button>
            <button className="flex items-center gap-3 px-2 py-2 rounded-lg text-[16px] font-normal text-[#222] hover:bg-[#F6F6F6] transition bg-[#F6F6F6]">
              <span className="material-icons text-[20px]">description</span>
              Documents
            </button>
            <button className="flex items-center gap-3 px-2 py-2 rounded-lg text-[16px] font-normal text-[#222] hover:bg-[#F6F6F6] transition">
              <span className="material-icons text-[20px]">auto_awesome</span>
              Create content
            </button>
          </nav>
        </div>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden pt-[120px]">
        {/* Top right buttons */}
        <div className="absolute top-8 right-12 flex flex-row gap-3 z-30">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CECECE]/60 bg-white/25 hover:bg-white/40 transition shadow-sm" style={{padding: 0}}>
            <img src={questionIcon} alt="Help" className="w-6 h-6 object-contain" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CECECE]/60 bg-white/25 hover:bg-white/40 transition shadow-sm" style={{padding: 0}}>
            <img src={userIcon} alt="User" className="w-6 h-6 object-contain" />
          </button>
        </div>
        {/* Декоративні елементи */}
        <div className="pointer-events-none absolute z-0"
             style={{
               width: 300,
               height: 200,
               left: '40%',
               top: '30%',
               background: '#F6CC06',
               opacity: 0.25,
               filter: 'blur(120px)',
               borderRadius: '50%',
               position: 'absolute',
             }} />
        <div className="pointer-events-none absolute z-0"
             style={{
               width: 250,
               height: 180,
               left: '60%',
               top: '50%',
               background: '#FF0004',
               opacity: 0.18,
               filter: 'blur(120px)',
               borderRadius: '50%',
               position: 'absolute',
             }} />
        {/* Основний контент */}
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-8 items-center justify-center pt-24">
          <h1 className="font-inter font-medium text-[32px] leading-[40px] text-black text-center mb-2">Good to see you! What's on your mind?</h1>
          <div className="flex flex-row gap-3 flex-wrap justify-center mb-6">
            <button className="rounded-full bg-white/60 border border-[#E5E5E5] px-6 py-2 text-[16px] font-normal text-black shadow-sm hover:bg-white transition">Create a Therapeutic Area Monograph</button>
            <button className="rounded-full bg-white/60 border border-[#E5E5E5] px-6 py-2 text-[16px] font-normal text-black shadow-sm hover:bg-white transition">Analyze patient journey</button>
            <button className="rounded-full bg-white/60 border border-[#E5E5E5] px-6 py-2 text-[16px] font-normal text-black shadow-sm hover:bg-white transition">Perform resource optimization for digital channels</button>
          </div>
          <div className="w-full max-w-xl bg-white/60 border border-[#E5E5E5] rounded-2xl flex flex-row items-center px-6 py-4 gap-4 shadow-sm">
            <input
              type="text"
              placeholder="Ask anything"
              className="flex-1 bg-transparent outline-none border-none text-[18px] font-normal text-black placeholder:text-[#CBCBCB]"
              style={{fontFamily: 'Inter, sans-serif'}}
            />
            <button className="rounded-full bg-[#FFE066] w-10 h-10 flex items-center justify-center shadow hover:bg-[#FFE066]/90 transition" aria-label="Send">
              <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#FFE066"/>
                <path d="M9 8l4 4-4 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="flex flex-row gap-2 mt-2">
            <button className="rounded-full bg-white/60 border border-[#E5E5E5] px-4 py-1 text-[14px] font-normal text-black shadow-sm hover:bg-white transition">Analyze</button>
            <button className="rounded-full bg-white/60 border border-[#E5E5E5] px-4 py-1 text-[14px] font-normal text-black shadow-sm hover:bg-white transition">Think</button>
            <button className="rounded-full bg-white/60 border border-[#E5E5E5] px-4 py-1 text-[14px] font-normal text-black shadow-sm hover:bg-white transition">Deep Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 