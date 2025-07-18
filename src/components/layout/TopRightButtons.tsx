import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SunIcon from '../../assets/icons/SunIcon';
import MoonIcon from '../../assets/icons/MoonIcon';
import QuestionIcon from '../../assets/icons/QuestionIcon';
import UserIcon from '../../assets/icons/UserIcon';
import { themeColors } from '../../constants/theme';
import { useAuth } from '../../context/AuthContext';

interface TopRightButtonsProps {
  style?: React.CSSProperties;
}

const TopRightButtons: React.FC<TopRightButtonsProps> = ({ style }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isDark = pathname.endsWith('-dark');
  const theme = isDark ? themeColors.dark : themeColors.light;
  const { user, isAuthenticated, logout } = useAuth();

  const handleThemeToggle = () => {
    navigate(isDark ? '/home' : '/home-dark');
  };

  return (
    <div className="absolute top-8" style={{ right: 70, display: 'flex', flexDirection: 'row', gap: 12, zIndex: 30, ...style }}>
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CECECE]/60 bg-white/25 hover:bg-white/40 transition shadow-sm"
        style={{ padding: 0 }}
        aria-label="Toggle theme"
        onClick={handleThemeToggle}
      >
        {isDark ? <SunIcon size={24} /> : <MoonIcon size={24} />}
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CECECE]/60 bg-white/25 hover:bg-white/40 transition shadow-sm" style={{ padding: 0 }} aria-label="Help">
        <QuestionIcon color={theme.icon} size={24} />
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#CECECE]/60 bg-white/25 hover:bg-white/40 transition shadow-sm" style={{ padding: 0 }} aria-label="User">
        <UserIcon color={theme.icon} size={24} />
      </button>
      {isAuthenticated && (
        <>
          <span className="ml-2 font-inter text-[14px] flex items-center" style={{ color: isDark ? '#fff' : '#5B5B5B' }}>{user?.email}</span>
          <button
            className="ml-2 px-3 py-1 rounded-[8px] bg-[#FFE66E] text-black font-inter text-[14px] font-medium border-none shadow-none hover:bg-[#FFCC06] transition"
            onClick={logout}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default TopRightButtons; 