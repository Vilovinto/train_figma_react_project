import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditIcon from '../../assets/icons/EditIcon';
import TableIcon from '../../assets/icons/TableIcon';
import ChatHistoryIcon from '../../assets/icons/ChatHistoryIcon';
import DocumentsIcon from '../../assets/icons/DocumentsIcon';
import CreateContentIcon from '../../assets/icons/CreateContentIcon';
import { themeColors } from '../../constants/theme';

const Sidebar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isDark = pathname === '/home-dark' || pathname === '/chat-dark' || pathname === '/chats-dark';
  const theme = isDark ? themeColors.dark : themeColors.light;

  const handleEditClick = () => {
    navigate(isDark ? '/home-dark' : '/home');
  };

  return (
    <aside
      className="h-screen flex flex-col z-20"
      style={{
        width: 320,
        minWidth: 220,
        maxWidth: 320,
        borderRight: `1px solid ${theme.border}`,
        background: isDark ? '#101010' : 'transparent',
        color: isDark ? '#fff' : undefined,
      }}
    >
      <div>
        <div className="flex flex-row items-center justify-between" style={{width: 272, height: 64, marginTop: 32, marginLeft: 24}}>
          <div className="flex flex-col items-center justify-center" style={{width: 70}}>
            <img src={require('../../assets/images/logo-person.png')} alt="Logo Person" className="h-[43px] w-[16px] object-contain mx-auto" />
            {isDark ? (
              <img src={require('../../assets/images/text_logo.png')} alt="Dalmar Labs" className="h-[20px] w-[70px] object-contain mx-auto mt-1" />
            ) : (
              <img src={require('../../assets/images/logo-text.png')} alt="Dalmar Labs" className="h-[20px] w-[70px] object-contain mx-auto mt-1" />
            )}
          </div>
          <div className="flex flex-row items-center gap-3" style={{width: 60, height: 24}}>
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
                onClick={handleEditClick}
                aria-label="Edit"
              >
                <EditIcon color={theme.icon} size={24} />
              </button>
            </div>
            <button className="w-6 h-6 flex items-center justify-center p-0 bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent" style={{outline: 'none'}}>
              <TableIcon color={theme.icon} size={24} />
            </button>
          </div>
        </div>
        {isDark && (
          <button
            className="flex flex-row items-center justify-start gap-2 px-4 py-3 rounded-[12px] w-[272px] mt-[51px] ml-[24px] hover:bg-[#F6F6F6] transition"
            style={{background: 'none', border: 'none', boxShadow: 'none'}}
            onClick={handleEditClick}
          >
            <EditIcon color={theme.icon} size={24} />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '140%',
              color: theme.icon,
              letterSpacing: 0,
            }}>
              New Chat
            </span>
          </button>
        )}
        <button
          className={`flex flex-row items-center justify-start gap-2 px-4 py-3 rounded-[12px] w-[272px] ${isDark ? 'mt-[14px]' : 'mt-[51px]'} ml-[24px] hover:bg-[#F6F6F6] transition`}
          style={{background: 'none', border: 'none', boxShadow: 'none'}}
          onClick={() => navigate(isDark ? '/chats-dark' : '/chats')}
        >
          <ChatHistoryIcon color={theme.icon} size={24} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '140%',
            color: theme.icon,
            letterSpacing: 0,
          }}>
            Chat history
          </span>
        </button>
        <button
          className="flex flex-row items-center justify-start w-[272px] mt-[14px] ml-[24px] border transition hover:bg-[#F0ECE6]"
          style={{
            border: `1px solid ${theme.documentsBorder}`,
            background: theme.documentsBg,
            borderRadius: 24,
            padding: 16,
            gap: 8,
            color: theme.documentsText,
            boxShadow: 'none',
            height: isDark ? 48 : undefined,
            width: isDark ? 272 : undefined,
          }}>
          <DocumentsIcon color={theme.documentsText} size={24} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '140%',
            color: theme.documentsText,
            letterSpacing: 0,
          }}>
            Documents
          </span>
        </button>
        <button
          className="flex flex-row items-center justify-start gap-2 px-4 py-3 rounded-[12px] w-[272px] mt-[14px] ml-[24px] hover:bg-[#F6F6F6] transition"
          style={{background: 'none', border: 'none', boxShadow: 'none'}}>
          <CreateContentIcon color={theme.icon} size={24} />
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '140%',
            color: theme.icon,
            letterSpacing: 0,
          }}>
            Create content
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 