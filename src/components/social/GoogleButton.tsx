import React from 'react';
const ICON = require('../../assets/images/google.png');

const GoogleButton: React.FC = () => {
  return (
    <button
      type="button"
      className="flex-1 flex items-center justify-center h-[48px] border border-[#CECECE]/60 rounded-[24px] bg-white bg-opacity-25 hover:bg-gray-50 px-[12px] py-[14px] gap-2 transition"
      style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em' }}
    >
      <img src={ICON} alt="Google" className="w-[28px] h-[27px] rounded-[24px]" />
      <span className="text-[16px] font-normal text-black leading-[19px]">Google</span>
    </button>
  );
};

export default GoogleButton; 