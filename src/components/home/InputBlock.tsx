import React from 'react';
import arrowUpIcon from '../../assets/images/arrow-up.png';
import paperclipIcon from '../../assets/images/paperclip.png';
import analyzeIcon from '../../assets/images/analyze.png';
import thinkIcon from '../../assets/images/think.png';
import searchIcon from '../../assets/images/deep_search.png';

interface InputBlockProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

const InputBlock: React.FC<InputBlockProps> = ({ placeholder = 'Ask anything', value, onChange, onSend }) => {
  const isDark = typeof window !== 'undefined' && window.location.pathname === '/home-dark';
  const iconColor = isDark ? '#CBCBCB' : '#5B5B5B';
  return (
  <div style={{
    position: 'relative',
    width: 770,
    marginBottom: 24,
  }}>
    <svg
      width="100%"
      height="140"
      viewBox="0 0 770 140"
      fill="none"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <linearGradient id="input-border-gradient" x1="0" y1="0" x2="770" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor={isDark ? '#FF0004' : '#AE0003'} />
          <stop offset="1" stopColor={isDark ? '#FFCC06' : '#D7B201'} />
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
        background: isDark ? 'transparent' : 'rgba(255,255,255,0.12)',
        boxSizing: 'border-box',
        padding: '16px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        justifyContent: 'flex-start',
      }}
    >
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24, width: '100%'}}>
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
          onClick={onSend}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 12L12 5L19 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', gap: 8, marginTop: 8}}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: isDark ? '#232325' : 'rgba(255,255,255,0.24)',
          border: isDark ? '1px solid rgba(206,206,206,0.6)' : '1px solid #CECECE',
          borderColor: isDark ? 'rgba(206,206,206,0.6)' : 'rgba(206,206,206,0.6)',
          padding: 0,
          height: 32,
          width: 32,
          boxShadow: 'none',
          cursor: 'pointer',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8666 9.2081L10.2082 16.8664C9.27005 17.8046 7.99757 18.3317 6.67075 18.3317C5.34393 18.3317 4.07145 17.8046 3.13325 16.8664C2.19505 15.9282 1.66797 14.6558 1.66797 13.3289C1.66797 12.0021 2.19505 10.7296 3.13325 9.79144L10.7916 2.1331C11.4171 1.50763 12.2654 1.15625 13.1499 1.15625C14.0345 1.15625 14.8828 1.50763 15.5082 2.1331C16.1337 2.75857 16.4851 3.60689 16.4851 4.49144C16.4851 5.37598 16.1337 6.2243 15.5082 6.84977L7.84158 14.5081C7.52885 14.8208 7.10469 14.9965 6.66242 14.9965C6.22014 14.9965 5.79598 14.8208 5.48325 14.5081C5.17051 14.1954 4.99482 13.7712 4.99482 13.3289C4.99482 12.8867 5.17051 12.4625 5.48325 12.1498L12.5582 5.0831" stroke={isDark ? '#DBDBDB' : iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          borderRadius: 16,
          background: isDark ? '#232325' : 'rgba(255,255,255,0.24)',
          border: isDark ? '1px solid rgba(206,206,206,0.6)' : '1px solid #CECECE',
          borderColor: isDark ? 'rgba(206,206,206,0.6)' : 'rgba(206,206,206,0.6)',
          padding: '4px 12px',
          height: 28,
          boxShadow: 'none',
          cursor: 'pointer',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.18717 11.6862L0.833008 10.707L4.99967 4.04036L7.49967 6.95703L10.833 1.54036L13.333 5.29036L16.1455 0.832031L17.4997 1.8112L13.3747 8.35286L10.8955 4.6237L7.72884 9.76953L5.20801 6.83203L2.18717 11.6862ZM12.083 14.9987C12.6663 14.9987 13.1594 14.7973 13.5622 14.3945C13.965 13.9918 14.1663 13.4987 14.1663 12.9154C14.1663 12.332 13.965 11.839 13.5622 11.4362C13.1594 11.0334 12.6663 10.832 12.083 10.832C11.4997 10.832 11.0066 11.0334 10.6038 11.4362C10.2011 11.839 9.99967 12.332 9.99967 12.9154C9.99967 13.4987 10.2011 13.9918 10.6038 14.3945C11.0066 14.7973 11.4997 14.9987 12.083 14.9987ZM16.333 18.332L14.083 16.082C13.7913 16.2765 13.4754 16.4223 13.1351 16.5195C12.7948 16.6168 12.4441 16.6654 12.083 16.6654C11.0413 16.6654 10.1559 16.3008 9.42676 15.5716C8.69759 14.8424 8.33301 13.957 8.33301 12.9154C8.33301 11.8737 8.69759 10.9883 9.42676 10.2591C10.1559 9.52995 11.0413 9.16537 12.083 9.16537C13.1247 9.16537 14.0101 9.52995 14.7393 10.2591C15.4684 10.9883 15.833 11.8737 15.833 12.9154C15.833 13.2765 15.7844 13.6272 15.6872 13.9674C15.59 14.3077 15.4441 14.6237 15.2497 14.9154L17.4997 17.1654L16.333 18.332Z" fill={isDark ? '#fff' : iconColor}/>
          </svg>
          <span style={{fontSize: 14, color: isDark ? '#CBCBCB' : iconColor, fontFamily: 'Inter, sans-serif', fontWeight: isDark ? 500 : 400, lineHeight: '150%'}}>Analyze</span>
        </button>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          borderRadius: 16,
          background: isDark ? '#232325' : 'rgba(255,255,255,0.24)',
          border: isDark ? '1px solid rgba(206,206,206,0.6)' : '1px solid #CECECE',
          borderColor: isDark ? 'rgba(206,206,206,0.6)' : 'rgba(206,206,206,0.6)',
          padding: '4px 12px',
          height: 28,
          boxShadow: 'none',
          cursor: 'pointer',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33366 15.0013C7.87533 15.0013 7.48296 14.8381 7.15658 14.5117C6.83019 14.1853 6.66699 13.793 6.66699 13.3346V12.293C5.87533 11.7513 5.26074 11.0569 4.82324 10.2096C4.38574 9.36241 4.16699 8.45963 4.16699 7.5013C4.16699 5.8763 4.73296 4.49783 5.86491 3.36589C6.99685 2.23394 8.37533 1.66797 10.0003 1.66797C11.6253 1.66797 13.0038 2.23394 14.1357 3.36589C15.2677 4.49783 15.8337 5.8763 15.8337 7.5013C15.8337 8.45963 15.6149 9.35894 15.1774 10.1992C14.7399 11.0395 14.1253 11.7374 13.3337 12.293V13.3346C13.3337 13.793 13.1705 14.1853 12.8441 14.5117C12.5177 14.8381 12.1253 15.0013 11.667 15.0013H8.33366ZM8.33366 13.3346H11.667V11.418L12.3753 10.918C12.9448 10.5291 13.3857 10.0326 13.6982 9.42838C14.0107 8.82422 14.167 8.18186 14.167 7.5013C14.167 6.34852 13.7607 5.36589 12.9482 4.55339C12.1357 3.74089 11.1531 3.33464 10.0003 3.33464C8.84755 3.33464 7.86491 3.74089 7.05241 4.55339C6.23991 5.36589 5.83366 6.34852 5.83366 7.5013C5.83366 8.18186 5.98991 8.82422 6.30241 9.42838C6.61491 10.0326 7.05588 10.5291 7.62533 10.918L8.33366 11.418V13.3346ZM8.33366 18.3346C8.09755 18.3346 7.89963 18.2548 7.73991 18.0951C7.58019 17.9353 7.50033 17.7374 7.50033 17.5013V16.668H12.5003V17.5013C12.5003 17.7374 12.4205 17.9353 12.2607 18.0951C12.101 18.2548 11.9031 18.3346 11.667 18.3346H8.33366Z" fill={isDark ? '#DBDBDB' : iconColor}/>
          </svg>
          <span style={{fontSize: 14, color: isDark ? '#CBCBCB' : iconColor, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '140%'}}>Think</span>
        </button>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          borderRadius: 16,
          background: isDark ? '#232325' : 'rgba(255,255,255,0.24)',
          border: isDark ? '1px solid rgba(206,206,206,0.6)' : '1px solid #CECECE',
          borderColor: isDark ? 'rgba(206,206,206,0.6)' : 'rgba(206,206,206,0.6)',
          padding: '4px 12px',
          height: 28,
          boxShadow: 'none',
          cursor: 'pointer',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke={isDark ? '#DBDBDB' : iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.7498 15.7508L12.4873 12.4883" stroke={isDark ? '#DBDBDB' : iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{fontSize: 14, color: isDark ? '#CBCBCB' : iconColor, fontFamily: 'Inter, sans-serif', fontWeight: 400, lineHeight: '140%'}}>Deep Search</span>
        </button>
      </div>
    </div>
  </div>
);
};

export default InputBlock; 