import React from 'react';

interface UserIconProps {
  color?: string;
  size?: number;
}

const UserIcon: React.FC<UserIconProps> = ({ color = '#5B5B5B', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
  </svg>
);

export default UserIcon; 