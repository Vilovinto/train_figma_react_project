import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const location = useLocation();
  const isDark = location.pathname === '/home-dark';
  const iconColor = isDark ? '#CBCBCB' : '#000';

  return (
    <aside
      className="h-screen flex flex-col z-20"
      style={{
        width: 320,
        minWidth: 220,
        maxWidth: 320,
        borderRight: '1px solid rgba(206,206,206,0.6)',
        background: isDark ? '#101010' : 'transparent',
        color: isDark ? '#fff' : undefined,
      }}
    >
      <div>
        <div className="flex flex-row items-center justify-between" style={{width: 272, height: 64, marginTop: 32, marginLeft: 24}}>
          <div className="flex flex-col items-center justify-center" style={{width: 70}}>
            {/* Логотипи залишаю як є */}
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
              >
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4.96094H4C3.46957 4.96094 2.96086 5.17165 2.58579 5.54672C2.21071 5.9218 2 6.4305 2 6.96094V20.9609C2 21.4914 2.21071 22.0001 2.58579 22.3752C2.96086 22.7502 3.46957 22.9609 4 22.9609H18C18.5304 22.9609 19.0391 22.7502 19.4142 22.3752C19.7893 22.0001 20 21.4914 20 20.9609V13.9609" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 3.46116C18.8978 3.06334 19.4374 2.83984 20 2.83984C20.5626 2.83984 21.1022 3.06334 21.5 3.46116C21.8978 3.85899 22.1213 4.39855 22.1213 4.96116C22.1213 5.52377 21.8978 6.06334 21.5 6.46116L12 15.9612L8 16.9612L9 12.9612L18.5 3.46116Z" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <button className="w-6 h-6 flex items-center justify-center p-0 bg-transparent border-none shadow-none hover:bg-transparent focus:bg-transparent" style={{outline: 'none'}}>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3.96094H5C4.46957 3.96094 3.96086 4.17165 3.58579 4.54672C3.21071 4.9218 3 5.4305 3 5.96094V9.96094M9 3.96094H19C19.5304 3.96094 20.0391 4.17165 20.4142 4.54672C20.7893 4.9218 21 5.4305 21 5.96094V9.96094M9 3.96094V21.9609M3 9.96094V19.9609C3 20.4914 3.21071 21.0001 3.58579 21.3752C3.96086 21.7502 4.46957 21.9609 5 21.9609H9M3 9.96094H21M21 9.96094V19.9609C21 20.4914 20.7893 21.0001 20.4142 21.3752C20.0391 21.7502 19.5304 21.9609 19 21.9609H9" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        {isDark && (
          <button
            className="flex flex-row items-center justify-start gap-2 px-4 py-3 rounded-[12px] w-[272px] mt-[51px] ml-[24px] hover:bg-[#F6F6F6] transition"
            style={{background: 'none', border: 'none', boxShadow: 'none'}}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 4.96094H4C3.46957 4.96094 2.96086 5.17165 2.58579 5.54672C2.21071 5.9218 2 6.4305 2 6.96094V20.9609C2 21.4914 2.21071 22.0001 2.58579 22.3752C2.96086 22.7502 3.46957 22.9609 4 22.9609H18C18.5304 22.9609 19.0391 22.7502 19.4142 22.3752C19.7893 22.0001 20 21.4914 20 20.9609V13.9609" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.5 3.46116C18.8978 3.06334 19.4374 2.83984 20 2.83984C20.5626 2.83984 21.1022 3.06334 21.5 3.46116C21.8978 3.85899 22.1213 4.39855 22.1213 4.96116C22.1213 5.52377 21.8978 6.06334 21.5 6.46116L12 15.9612L8 16.9612L9 12.9612L18.5 3.46116Z" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '140%',
              color: iconColor,
              letterSpacing: 0,
            }}>
              New Chat
            </span>
          </button>
        )}
        <button
          className={`flex flex-row items-center justify-start gap-2 px-4 py-3 rounded-[12px] w-[272px] ${isDark ? 'mt-[14px]' : 'mt-[51px]'} ml-[24px] hover:bg-[#F6F6F6] transition`}
          style={{background: 'none', border: 'none', boxShadow: 'none'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '140%',
            color: iconColor,
            letterSpacing: 0,
          }}>
            Chat history
          </span>
        </button>
        <button
          className="flex flex-row items-center justify-start w-[272px] mt-[14px] ml-[24px] border transition hover:bg-[#F0ECE6]"
          style={{
            border: isDark ? '1px solid #808080' : '1px solid #EDEDED',
            borderColor: isDark ? '#808080' : 'rgba(237,237,237,0.6)',
            background: isDark ? '#808080' : '#F6F6F6',
            borderRadius: 24,
            padding: 16,
            gap: 8,
            color: isDark ? '#fff' : undefined,
            boxShadow: 'none',
            backdropFilter: undefined,
            height: isDark ? 48 : undefined,
            width: isDark ? 272 : undefined,
          }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke={isDark ? '#fff' : iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 2V9H20" stroke={isDark ? '#fff' : iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '140%',
            color: isDark ? '#fff' : iconColor,
            letterSpacing: 0,
          }}>
            Documents
          </span>
        </button>
        <button
          className="flex flex-row items-center justify-start gap-2 px-4 py-3 rounded-[12px] w-[272px] mt-[14px] ml-[24px] hover:bg-[#F6F6F6] transition"
          style={{background: 'none', border: 'none', boxShadow: 'none'}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4252 7.425C9.97519 8.1 8.9252 9.15 8.2502 12.6C7.5752 9.15 6.5252 8.1 3.0752 7.425C6.5252 6.75 7.5752 5.7 8.2502 2.25C8.9252 5.7 9.97519 6.75 13.4252 7.425Z" stroke={iconColor} strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.3504 18.7484C13.9504 19.1984 13.2754 19.9484 12.7504 22.3484C12.3004 19.9484 11.5504 19.2734 9.15039 18.7484C11.5504 18.2984 12.2254 17.5484 12.7504 15.1484C13.2004 17.5484 13.9504 18.2984 16.3504 18.7484Z" stroke={iconColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.7504 11.2492C19.8004 11.6242 19.2004 12.2242 18.8254 14.1742C18.4504 12.2242 17.8504 11.6242 15.9004 11.2492C17.8504 10.8742 18.4504 10.2742 18.8254 8.32422C19.2004 10.2742 19.8004 10.8742 21.7504 11.2492Z" stroke={iconColor} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="3.75" cy="17.25" r="0.75" fill={iconColor}/>
            <circle cx="21" cy="4.5" r="0.75" fill={iconColor}/>
          </svg>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '140%',
            color: iconColor,
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