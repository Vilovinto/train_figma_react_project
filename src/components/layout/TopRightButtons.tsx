import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface TopRightButtonsProps {
  style?: React.CSSProperties;
}

const TopRightButtons: React.FC<TopRightButtonsProps> = ({ style }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDark = location.pathname === '/home-dark';
  const questionColor = isDark ? '#fff' : '#5B5B5B';
  const userColor = isDark ? '#fff' : '#5B5B5B';

  const handleThemeToggle = () => {
    if (isDark) {
      navigate('/home');
    } else {
      navigate('/home-dark');
    }
  };

  return (
    <div className="absolute top-8" style={{right: 70, display: 'flex', flexDirection: 'row', gap: 12, zIndex: 30, ...style}}>
      {/* Theme toggle button (місяць/сонце) */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CECECE]/60 bg-white/25 hover:bg-white/40 transition shadow-sm"
        style={{padding: 0}}
        aria-label="Toggle theme"
        onClick={handleThemeToggle}
      >
        {isDark ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFCC06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        )}
      </button>
      {/* Question mark button (правильний знак питання) */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CECECE]/60 bg-white/25 hover:bg-white/40 transition shadow-sm" style={{padding: 0}} aria-label="Help">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M12 16.5V17" stroke={questionColor} strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M12 14C12 12.5 15.89 12.5 15.89 9.5C15.89 7.5 14.11 6 12 6C9.89 6 8.11 7.5 8.11 9.5" stroke={questionColor} strokeWidth="1.5" strokeLinecap="round"/>
          </g>
        </svg>
      </button>
      {/* User icon */}
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CECECE]/60 bg-white/25 hover:bg-white/40 transition shadow-sm" style={{padding: 0}} aria-label="User">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={userColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
        </svg>
      </button>
    </div>
  );
};

export default TopRightButtons; 