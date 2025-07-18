import React from 'react';

interface MoonIconProps {
  color?: string;
  size?: number;
}

const MoonIcon: React.FC<MoonIconProps> = ({ color = '#5B5B5B', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </svg>
);

export default MoonIcon; 