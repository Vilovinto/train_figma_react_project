import React from 'react';

interface QuestionIconProps {
  color?: string;
  size?: number;
}

const QuestionIcon: React.FC<QuestionIconProps> = ({ color = '#5B5B5B', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M12 16.5V17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 14C12 12.5 15.89 12.5 15.89 9.5C15.89 7.5 14.11 6 12 6C9.89 6 8.11 7.5 8.11 9.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </g>
  </svg>
);

export default QuestionIcon; 