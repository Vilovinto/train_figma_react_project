import React from 'react';
import { Input, Button } from '../common';
import { useNavigate } from 'react-router-dom';

const RegisterStep2Form = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };
  return (
    <form className="w-full flex flex-col gap-0 items-center" onSubmit={handleSubmit}>
      <div className="mb-2 w-full max-w-[380px]">
        <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Work Email</label>
        <Input type="email" placeholder="Username or email" autoComplete="email" className="w-full" />
      </div>
      <div className="mb-2 w-full max-w-[380px]">
        <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Password</label>
        <Input type="password" placeholder="Username or email" autoComplete="new-password" className="w-full" />
      </div>
      <div className="flex gap-4 w-full max-w-[380px] mb-2">
        <div className="w-1/2">
          <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Job role</label>
          <Input type="text" placeholder="Job role" className="w-full" />
        </div>
        <div className="w-1/2">
          <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Job function</label>
          <Input type="text" placeholder="Job function" className="w-full" />
        </div>
      </div>
      <div className="mb-6 w-full max-w-[380px]">
        <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Therapeutic Area</label>
        <Input type="text" placeholder="Username or email" className="w-full" />
      </div>
      <Button type="submit"
        className="w-full max-w-[380px] h-[48px] rounded-[16px] bg-[#FFE66E] text-black font-inter text-[16px] font-medium leading-[19px] px-[6px] py-[4px] gap-[10px] shadow-none border-none focus:outline-none focus:ring-2 focus:ring-[#FFE66E]/60 mb-0">
        Create Account
      </Button>
    </form>
  );
};

export default RegisterStep2Form; 