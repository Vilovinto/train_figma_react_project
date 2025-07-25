import React from 'react';

interface ArrowUpIconProps {
  color?: string;
  size?: number;
}

const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({ color = 'black', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19V5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 12L12 5L19 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ArrowUpIcon; 