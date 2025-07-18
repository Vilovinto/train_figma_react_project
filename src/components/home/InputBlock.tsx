import React from 'react';
import ArrowUpIcon from '../../assets/icons/ArrowUpIcon';
import PaperclipIcon from '../../assets/icons/PaperclipIcon';
import AnalyzeIcon from '../../assets/icons/AnalyzeIcon';
import ThinkIcon from '../../assets/icons/ThinkIcon';
import DeepSearchIcon from '../../assets/icons/DeepSearchIcon';
import { themeColors } from '../../constants/theme';
import { gradients } from '../../styles/common';

interface InputBlockProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

const InputBlock: React.FC<InputBlockProps> = (props) => {
  const { placeholder = 'Ask anything', value, onChange, onSend } = props;
  const isDark = typeof window !== 'undefined' && window.location.pathname === '/home-dark';
  const theme = isDark ? themeColors.dark : themeColors.light;
  return (
    <div style={{ position: 'relative', width: 770, marginBottom: 24 }}>
      <svg
        width="100%"
        height="140"
        viewBox="0 0 770 140"
        fill="none"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}
      >
        <defs>
          <linearGradient id="input-border-gradient" x1="0" y1="0" x2="770" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor={theme.gradientStart} />
            <stop offset="1" stopColor={theme.gradientEnd} />
          </linearGradient>
        </defs>
        <rect
          x="0.25"
          y="0.25"
          width="769.5"
          height="139.5"
          rx="24"
          fill="none"
          stroke="url(#input-border-gradient)"
          strokeWidth={isDark ? 0.5 : 1}
        />
      </svg>
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: 140,
          borderRadius: 24,
          background: theme.background,
          boxSizing: 'border-box',
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          justifyContent: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24, width: '100%' }}>
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '140%',
              color: theme.text,
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
            onClick={onSend}
          >
            <ArrowUpIcon color="black" size={24} />
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 8, marginTop: 8 }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: isDark ? '#232325' : 'rgba(255,255,255,0.24)',
            border: `1px solid ${theme.border}`,
            padding: 0,
            height: 32,
            width: 32,
            boxShadow: 'none',
            cursor: 'pointer',
          }}>
            <PaperclipIcon color={isDark ? '#DBDBDB' : theme.icon} size={20} />
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            borderRadius: 16,
            background: isDark ? '#232325' : 'rgba(255,255,255,0.24)',
            border: `1px solid ${theme.border}`,
            padding: '4px 12px',
            height: 28,
            boxShadow: 'none',
            cursor: 'pointer',
          }}>
            <AnalyzeIcon color={isDark ? '#fff' : theme.icon} size={20} />
            <span style={{ fontSize: 14, color: isDark ? '#CBCBCB' : theme.icon, fontFamily: 'Inter, sans-serif', fontWeight: isDark ? 500 : 400, lineHeight: '150%' }}>Analyze</span>
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            borderRadius: 16,
            background: isDark ? '#232325' : 'rgba(255,255,255,0.24)',
            border: `1px solid ${theme.border}`,
            padding: '4px 12px',
            height: 28,
            boxShadow: 'none',
            cursor: 'pointer',
          }}>
            <ThinkIcon color={isDark ? '#DBDBDB' : theme.icon} size={20} />
            <span style={{ fontSize: 14, color: isDark ? '#CBCBCB' : theme.icon, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '140%' }}>Think</span>
          </button>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            borderRadius: 16,
            background: isDark ? '#232325' : 'rgba(255,255,255,0.24)',
            border: `1px solid ${theme.border}`,
            padding: '4px 12px',
            height: 28,
            boxShadow: 'none',
            cursor: 'pointer',
          }}>
            <DeepSearchIcon color={isDark ? '#DBDBDB' : theme.icon} size={18} />
            <span style={{ fontSize: 14, color: isDark ? '#CBCBCB' : theme.icon, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '140%' }}>Deep Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBlock; 