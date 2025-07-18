import React from 'react';

interface CreateContentIconProps {
  color?: string;
  size?: number;
}

const CreateContentIcon: React.FC<CreateContentIconProps> = ({ color = 'black', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.4252 7.425C9.97519 8.1 8.9252 9.15 8.2502 12.6C7.5752 9.15 6.5252 8.1 3.0752 7.425C6.5252 6.75 7.5752 5.7 8.2502 2.25C8.9252 5.7 9.97519 6.75 13.4252 7.425Z" stroke={color} strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.3504 18.7484C13.9504 19.1984 13.2754 19.9484 12.7504 22.3484C12.3004 19.9484 11.5504 19.2734 9.15039 18.7484C11.5504 18.2984 12.2254 17.5484 12.7504 15.1484C13.2004 17.5484 13.9504 18.2984 16.3504 18.7484Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.7504 11.2492C19.8004 11.6242 19.2004 12.2242 18.8254 14.1742C18.4504 12.2242 17.8504 11.6242 15.9004 11.2492C17.8504 10.8742 18.4504 10.2742 18.8254 8.32422C19.2004 10.2742 19.8004 10.8742 21.7504 11.2492Z" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="3.75" cy="17.25" r="0.75" fill={color}/>
    <circle cx="21" cy="4.5" r="0.75" fill={color}/>
  </svg>
);

export default CreateContentIcon; 