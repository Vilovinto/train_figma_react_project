import React, { useState, useEffect } from 'react';
import { Input, Button, Separator } from '../common';
import GoogleButton from '../social/GoogleButton';
import AppleButton from '../social/AppleButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (isAuthenticated) navigate('/home');
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const err = await register(email, password, confirm);
    if (err) setError(err);
  };

  return (
    <form className="w-full flex flex-col gap-0 items-center" onSubmit={handleSubmit}>
      <div className="flex gap-4 w-full max-w-[380px] mb-2">
        <div className="w-1/2">
          <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">First Name</label>
          <Input type="text" placeholder="Job role" className="w-full" value={firstName} onChange={({ target: { value } }) => setFirstName(value)} />
        </div>
        <div className="w-1/2">
          <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Last name</label>
          <Input type="text" placeholder="Job function" className="w-full" value={lastName} onChange={({ target: { value } }) => setLastName(value)} />
        </div>
      </div>
      <div className="mb-2 w-full max-w-[380px]">
        <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">User Name</label>
        <Input type="text" placeholder="Username or email" autoComplete="username" className="w-full" value={userName} onChange={({ target: { value } }) => setUserName(value)} />
      </div>
      <div className="mb-2 w-full max-w-[380px]">
        <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Email</label>
        <Input type="email" value={email} onChange={({ target: { value } }) => setEmail(value)} placeholder="Email" autoComplete="email" className="w-full" />
      </div>
      <div className="mb-2 w-full max-w-[380px]">
        <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Password</label>
        <Input type="password" value={password} onChange={({ target: { value } }) => setPassword(value)} placeholder="Password" autoComplete="new-password" className="w-full" />
      </div>
      <div className="mb-4 w-full max-w-[380px]">
        <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Confirm Password</label>
        <Input type="password" value={confirm} onChange={({ target: { value } }) => setConfirm(value)} placeholder="Confirm password" autoComplete="new-password" className="w-full" />
      </div>
      {error && <div className="text-red-500 text-sm mb-2 w-full max-w-[380px]">{error}</div>}
      <Button type="submit"
        className="w-full max-w-[380px] h-[48px] rounded-[16px] bg-[#FFE66E] text-black font-inter text-[16px] font-medium leading-[19px] px-[6px] py-[4px] gap-[10px] shadow-none border-none focus:outline-none focus:ring-2 focus:ring-[#FFE66E]/60 mb-6">
        Create Account
      </Button>
      <Separator className="my-0 mb-0 w-full max-w-[380px] flex-row gap-[30px]">
        <span className="font-inter text-[16px] font-light leading-[19px] tracking-[0.08em] text-[#666666] mx-2">Or</span>
      </Separator>
      <div className="flex gap-4 mt-6 mb-6 w-full max-w-[380px]">
        <GoogleButton />
        <AppleButton />
      </div>
    </form>
  );
};

export default RegisterForm; 