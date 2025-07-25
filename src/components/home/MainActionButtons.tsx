import React from 'react';
import { themeColors } from '../../constants/theme';
import { gradients } from '../../styles/common';

interface MainActionButtonsProps {
  buttons: { label: string }[];
}

const MainActionButtons: React.FC<MainActionButtonsProps> = (props) => {
  const { buttons } = props;
  const isDark = typeof window !== 'undefined' && window.location.pathname === '/home-dark';
  const theme = isDark ? themeColors.dark : themeColors.light;
  return (
    <div className="flex flex-row justify-start items-center gap-[10px] mt-0 mb-6" style={{ width: 'auto', margin: '0 auto 0 0' }}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="button-border-gradient-dark" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
            <stop stopColor={theme.gradientStart} />
            <stop offset="1" stopColor={theme.gradientEnd} />
          </linearGradient>
        </defs>
      </svg>
      {[0, 1, 2].map(i => (
        <div
          key={i}
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 56,
            minWidth: i === 0 ? 175 : 0,
            maxWidth: i === 0 ? 180 : undefined,
          }}
        >
          <button
            className="flex items-center text-[14px] font-normal transition"
            style={{
              position: 'relative',
              zIndex: 2,
              border: 'none',
              outline: 'none',
              background: theme.buttonBg,
              borderRadius: 16,
              padding: '8px 16px',
              color: theme.buttonText,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              lineHeight: '140%',
              textAlign: 'left',
              height: 56,
              minWidth: i === 0 ? 175 : 0,
              maxWidth: i === 0 ? 180 : undefined,
              boxSizing: 'border-box',
              whiteSpace: i === 0 ? 'normal' : 'pre-line',
              overflow: 'hidden',
            }}
            ref={el => {
              if (el && el.parentElement && i !== 0) {
                el.parentElement.style.width = el.scrollWidth + 'px';
              }
            }}
          >
            <span style={{ whiteSpace: i === 0 ? 'normal' : 'pre-line', textAlign: 'left', width: '100%', display: 'block', color: theme.buttonText }}>
              {buttons[i].label}
            </span>
          </button>
          <svg
            width="100%"
            height="100%"
            viewBox={`0 0 ${i === 0 ? 180 : i === 1 ? 143 : 220} 56`}
            fill="none"
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}
          >
            <rect
              x="0.25"
              y="0.25"
              width={`${i === 0 ? 179.5 : i === 1 ? 142.5 : 219.5}`}
              height="55.5"
              rx="16"
              fill="none"
              stroke={isDark ? 'url(#button-border-gradient-dark)' : `url(#button-border-gradient-${i + 1})`}
              strokeWidth={0.5}
            />
            {!isDark && (
              <defs>
                <linearGradient id={`button-border-gradient-${i + 1}`} x1="0" y1="0" x2={i === 0 ? 180 : i === 1 ? 143 : 220} y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor={i === 1 ? theme.gradientEnd : theme.gradientStart} />
                  <stop offset="1" stopColor={i === 1 ? theme.gradientStart : theme.gradientEnd} />
                </linearGradient>
              </defs>
            )}
          </svg>
        </div>
      ))}
    </div>
  );
};

export default MainActionButtons; 