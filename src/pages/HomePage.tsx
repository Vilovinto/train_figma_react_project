import React, { useState } from 'react';
import logoPerson from '../assets/images/logo-person.png';
import logoText from '../assets/images/logo-text.png';
import questionIcon from '../assets/images/question.png';
import userIcon from '../assets/images/user.png';
import editIcon from '../assets/images/edit.png';
import tableIcon from '../assets/images/table.png';
import messageCircleIcon from '../assets/images/chat_history.png';
import fileIcon from '../assets/images/documents.png';
import createContentIcon from '../assets/images/create_content.png';
import arrowUpIcon from '../assets/images/arrow-up.png';
import paperclipIcon from '../assets/images/paperclip.png';
import analyzeIcon from '../assets/images/analyze.png';
import thinkIcon from '../assets/images/think.png';
import searchIcon from '../assets/images/deep_search.png';

const HomePage = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="min-h-screen w-full bg-[#FBF8F4] flex flex-row relative overflow-hidden">
      {/* Sidebar */}
      <aside className="h-screen flex flex-col z-20" style={{width: 320, minWidth: 220, maxWidth: 320, borderRight: '1px solid rgba(206,206,206,0.6)', background: 'transparent'}}>
        {/* Top: логотип + кнопки + Chat history */}
        <div>
          <div className="flex flex-row items-center justify-between" style={{width: 272, height: 64, marginTop: 32, marginLeft: 24}}>
            {/* Логотип */}
            <div className="flex flex-col items-center justify-center" style={{width: 70}}>
              <img src={logoPerson} alt="Logo Person" className="h-[43px] w-[16px] object-contain mx-auto" />
              <img src={logoText} alt="Dalmar Labs" className="h-[20px] w-[70px] object-contain mx-auto mt-1" />
            </div>
            {/* Кнопки */}
            <div className="flex flex-row items-center gap-3" style={{width: 60, height: 24}}>
              {/* Edit button with tooltip */}
              <div style={{position: 'relative', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {showTooltip && (
                  <div className="absolute" style={{top: -38, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', zIndex: 40}}>
                    <div style={{
                      background: '#E5E5E5',
                      color: '#000',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: 12,
                      lineHeight: '11px',
                      letterSpacing: 0,
                      padding: '8px 24px',
                      borderRadius: '5.4px',
                      opacity: 1,
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                      minWidth: 0,
                      maxWidth: 160,
                      boxShadow: 'none',
                      border: 'none',
                    }}>
                      Create New Chat
                    </div>
                    <div style={{width: 11, height: 5, margin: '0 auto', display: 'flex', justifyContent: 'center'}}>
                      <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0C2.5 0 8.5 0 11 0C9.5 2.5 7.5 5 5.5 5C3.5 5 1.5 2.5 0 0Z" fill="#E5E5E5"/>
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
              </div>
              <button className="w-6 h-6 flex items-center justify-center p-0 bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent" style={{outline: 'none'}}>
                <img src={tableIcon} alt="Table" className="w-6 h-6 object-contain" />
              </button>
            </div>
          </div>
          {/* Кнопка Chat history */}
          <button
            className="flex flex-row items-center justify-start gap-2 px-4 py-3 rounded-[12px] w-[272px] mt-[51px] ml-[24px] hover:bg-[#F6F6F6] transition"
            style={{background: 'none', border: 'none', boxShadow: 'none'}}>
            <img src={messageCircleIcon} alt="Chat history" className="w-6 h-6 object-contain" />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '140%',
              color: '#5B5B5B',
              letterSpacing: 0,
            }}>
              Chat history
            </span>
          </button>
          {/* Кнопка Documents */}
          <button
            className="flex flex-row items-center justify-start gap-2 px-4 py-3 rounded-[12px] w-[272px] mt-[14px] ml-[24px] bg-[#F6F6F6] border transition hover:bg-[#F0ECE6]"
            style={{border: '1px solid #EDEDED', borderColor: 'rgba(237,237,237,0.6)'}}>
            <img src={fileIcon} alt="Documents" className="w-6 h-6 object-contain" />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '140%',
              color: '#000',
              letterSpacing: 0,
            }}>
              Documents
            </span>
          </button>
          {/* Кнопка Create content */}
          <button
            className="flex flex-row items-center justify-start gap-2 px-4 py-3 rounded-[12px] w-[272px] mt-[14px] ml-[24px] hover:bg-[#F6F6F6] transition"
            style={{background: 'none', border: 'none', boxShadow: 'none'}}>
            <img src={createContentIcon} alt="Create content" className="w-6 h-6 object-contain" />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '140%',
              color: '#5B5B5B',
              letterSpacing: 0,
            }}>
              Create content
            </span>
          </button>
        </div>
        {/* Bottom: інші елементи */}
        {/* Видалити старий блок меню */}
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-start relative overflow-hidden">
        {/* Заголовок по центру, як у Figma */}
        <h1
          style={{
            width: 770,
            margin: '200px auto 0 auto',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: 32,
            lineHeight: '100%',
            letterSpacing: 0,
            color: '#000',
          }}
        >
          Good to see you! What’s on your mind?
        </h1>
        {/* Top right buttons */}
        <div className="absolute top-8" style={{right: 70, display: 'flex', flexDirection: 'row', gap: 12, zIndex: 30}}>
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
          {/* Оновлений блок кнопок */}
          <div
            className="flex flex-row justify-start items-center gap-[10px] mt-0 mb-6"
            style={{ width: 'auto', margin: '0 auto 0 0' }}
          >
            {/* Кнопка 1 */}
            <div style={{position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 56, minWidth: 175, maxWidth: 180}}>
              <button
                className="flex items-center text-[14px] font-normal transition"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  border: 'none',
                  outline: 'none',
                  background: 'rgba(255,255,255,0.24)',
                  borderRadius: 16,
                  padding: '8px 16px',
                  color: '#5B5B5B',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  lineHeight: '140%',
                  textAlign: 'left',
                  height: 56,
                  minWidth: 175,
                  maxWidth: 180,
                  boxSizing: 'border-box',
                  whiteSpace: 'normal',
                  overflow: 'hidden',
                }}
              >
                <span style={{whiteSpace: 'normal', textAlign: 'left', width: '100%', display: 'block'}}>
                  Create a Therapeutic Area Monograph
                </span>
              </button>
              <svg width="100%" height="100%" viewBox="0 0 180 56" fill="none" style={{position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none'}}>
                <defs>
                  <linearGradient id="button-border-gradient-1" x1="0" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF0004" />
                    <stop offset="1" stopColor="#FFCC06" />
                  </linearGradient>
                </defs>
                <rect x="0.25" y="0.25" width="179.5" height="55.5" rx="16" fill="none" stroke="url(#button-border-gradient-1)" strokeWidth="0.5" />
              </svg>
            </div>
            {/* Кнопка 2 */}
            <div style={{position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 56, minWidth: 0}}>
              <button
                className="flex items-center text-[14px] font-normal transition"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  border: 'none',
                  outline: 'none',
                  background: 'rgba(255,255,255,0.24)',
                  borderRadius: 16,
                  padding: '8px 16px',
                  color: '#5B5B5B',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  lineHeight: '140%',
                  textAlign: 'left',
                  height: 56,
                  minWidth: 0,
                  boxSizing: 'border-box',
                  whiteSpace: 'pre-line',
                }}
                ref={el => {
                  if (el && el.parentElement) {
                    el.parentElement.style.width = el.scrollWidth + 'px';
                  }
                }}
              >
                <span style={{whiteSpace: 'pre-line', textAlign: 'left', width: '100%'}}>Analyze patient{"\n"}journey</span>
              </button>
              <svg width="100%" height="100%" viewBox="0 0 143 56" fill="none" style={{position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none'}}>
                <defs>
                  <linearGradient id="button-border-gradient-2" x1="0" y1="0" x2="143" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFCC06" />
                    <stop offset="1" stopColor="#FF0004" />
                  </linearGradient>
                </defs>
                <rect x="0.25" y="0.25" width="142.5" height="55.5" rx="16" fill="none" stroke="url(#button-border-gradient-2)" strokeWidth="0.5" />
              </svg>
            </div>
            {/* Кнопка 3 */}
            <div style={{position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: 56, minWidth: 0}}>
              <button
                className="flex items-center text-[14px] font-normal transition"
                style={{
                  position: 'relative',
                  zIndex: 2,
                  border: 'none',
                  outline: 'none',
                  background: 'rgba(255,255,255,0.24)',
                  borderRadius: 16,
                  padding: '8px 16px',
                  color: '#5B5B5B',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  lineHeight: '140%',
                  textAlign: 'left',
                  height: 56,
                  minWidth: 0,
                  boxSizing: 'border-box',
                  whiteSpace: 'pre-line',
                }}
                ref={el => {
                  if (el && el.parentElement) {
                    el.parentElement.style.width = el.scrollWidth + 'px';
                  }
                }}
              >
                <span style={{whiteSpace: 'pre-line', textAlign: 'left', width: '100%'}}>Perform resource optimization{"\n"}for digital channels</span>
              </button>
              <svg width="100%" height="100%" viewBox="0 0 220 56" fill="none" style={{position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none'}}>
                <defs>
                  <linearGradient id="button-border-gradient-3" x1="0" y1="0" x2="220" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF0004" />
                    <stop offset="1" stopColor="#FFCC06" />
                  </linearGradient>
                </defs>
                <rect x="0.25" y="0.25" width="219.5" height="55.5" rx="16" fill="none" stroke="url(#button-border-gradient-3)" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <div style={{position: 'relative', width: 770, marginBottom: 24}}>
            {/* SVG градієнтний бордер */}
            <svg width="100%" height="140" viewBox="0 0 770 140" fill="none" style={{position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none'}}>
              <defs>
                <linearGradient id="input-border-gradient" x1="0" y1="0" x2="770" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#AE0003" />
                  <stop offset="1" stopColor="#D7B201" />
                </linearGradient>
              </defs>
              <rect x="0.25" y="0.25" width="769.5" height="139.5" rx="24" fill="none" stroke="url(#input-border-gradient)" strokeWidth="0.5" />
            </svg>
            {/* Контент інпуту */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              height: 140,
              borderRadius: 24,
              background: 'rgba(255,255,255,0.12)',
              boxSizing: 'border-box',
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              justifyContent: 'flex-start',
            }}>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24, width: '100%'}}>
                <input
                  type="text"
                  placeholder="Ask anything"
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: '140%',
                    color: '#5B5B5B',
                    padding: 0,
                    margin: 0,
                    height: 48,
                    minWidth: 0,
                    boxSizing: 'border-box',
                    display: 'block',
                  }}
                />
                <button
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 80,
                    background: '#FFE66E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    outline: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    boxShadow: 'none',
                    transition: 'background 0.2s',
                  }}
                  aria-label="Send"
                >
                  <img src={arrowUpIcon} alt="Send" width={24} height={24} style={{display: 'block'}} />
                </button>
              </div>
              {/* Кнопки під інпутом */}
              <div style={{display: 'flex', flexDirection: 'row', gap: 8, marginTop: 8}}>
                {/* Скріпка */}
                <button style={{display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(255,255,255,0.24)', border: '1px solid #CECECE', borderColor: 'rgba(206,206,206,0.6)', padding: 0, height: 32, width: 32, boxShadow: 'none', cursor: 'pointer'}}>
                  <img src={paperclipIcon} alt="Attach" width={20} height={20} style={{display: 'block', margin: 'auto'}} />
                </button>
                {/* Analyze */}
                <button style={{display: 'flex', alignItems: 'center', gap: 4, borderRadius: 16, background: 'rgba(255,255,255,0.24)', border: '1px solid #CECECE', borderColor: 'rgba(206,206,206,0.6)', padding: '4px 12px', height: 28, boxShadow: 'none', cursor: 'pointer'}}>
                  <img src={analyzeIcon} alt="Analyze" width={20} height={20} style={{display: 'block'}} />
                  <span style={{fontSize: 14, color: '#5B5B5B', fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '140%'}}>Analyze</span>
                </button>
                {/* Think */}
                <button style={{display: 'flex', alignItems: 'center', gap: 4, borderRadius: 16, background: 'rgba(255,255,255,0.24)', border: '1px solid #CECECE', borderColor: 'rgba(206,206,206,0.6)', padding: '4px 12px', height: 28, boxShadow: 'none', cursor: 'pointer'}}>
                  <img src={thinkIcon} alt="Think" width={20} height={20} style={{display: 'block'}} />
                  <span style={{fontSize: 14, color: '#5B5B5B', fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '140%'}}>Think</span>
                </button>
                {/* Deep Search */}
                <button style={{display: 'flex', alignItems: 'center', gap: 4, borderRadius: 16, background: 'rgba(255,255,255,0.24)', border: '1px solid #CECECE', borderColor: 'rgba(206,206,206,0.6)', padding: '4px 12px', height: 28, boxShadow: 'none', cursor: 'pointer'}}>
                  <img src={searchIcon} alt="Deep Search" width={18} height={18} style={{display: 'block'}} />
                  <span style={{fontSize: 14, color: '#5B5B5B', fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '140%'}}>Deep Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 