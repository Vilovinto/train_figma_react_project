import React, { useState, useEffect } from 'react';
import { Input, Button, Separator } from '../common';
import GoogleButton from '../social/GoogleButton';
import AppleButton from '../social/AppleButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isAuthenticated) navigate('/home');
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const err = await login(email, password);
    if (err) setError(err);
  };

  return (
    <form className="w-full flex flex-col gap-0 items-center" onSubmit={handleSubmit}>
      <div className="mb-8 w-full max-w-[380px]">
        <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Email</label>
        <Input type="email" value={email} onChange={({ target: { value } }) => setEmail(value)} placeholder="Email" autoComplete="username" className="w-full" />
      </div>
      <div className="mb-2 w-full max-w-[380px]">
        <label className="block text-[16px] leading-[22px] font-normal text-black mb-2">Password</label>
        <Input type="password" value={password} onChange={({ target: { value } }) => setPassword(value)} placeholder="Password" autoComplete="current-password" className="w-full" />
      </div>
      {error && <div className="text-red-500 text-sm mb-2 w-full max-w-[380px]">{error}</div>}
      <div className="mb-4 w-full max-w-[380px]">
        <button type="button" className="font-inter text-[14px] leading-[20px] font-normal text-[#5B5B5B] text-center mx-auto focus:outline-none">Forgot password?</button>
      </div>
      <Button type="submit"
        className="w-full max-w-[380px] h-[48px] rounded-[16px] bg-[#FFE66E] text-black font-inter text-[16px] font-medium leading-[19px] px-[6px] py-[4px] gap-[10px] shadow-none border-none focus:outline-none focus:ring-2 focus:ring-[#FFE66E]/60 mb-6">
        Log In
      </Button>
      <Separator className="my-0 mb-0 w-full max-w-[380px] flex-row gap-[30px]">
        <span className="font-inter text-[16px] font-light leading-[19px] tracking-[0.08em] text-[#666666] mx-2">Or</span>
      </Separator>
      <div className="flex gap-4 mt-6 mb-6 w-full max-w-[380px]">
        <GoogleButton />
        <AppleButton />
      </div>
      <div className="w-auto mx-auto text-center">
        <span className="font-inter text-[14px] font-normal leading-[140%] text-black">Don’t have an account yet? </span>
        <button type="button" onClick={() => navigate('/register')} className="font-inter font-normal text-[14px] leading-[140%] text-black transition underline-offset-2 hover:underline focus:underline cursor-pointer bg-transparent p-0 m-0 border-0">Register for free</button>
      </div>
    </form>
  );
};

export default LoginForm; 