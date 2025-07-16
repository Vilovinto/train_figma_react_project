import React from 'react';
import LoginForm from '../components/ui/LoginForm';
import logoPerson from '../assets/images/logo-person.png';
import logoText from '../assets/images/logo-text.png';

const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FBF8F4] relative overflow-hidden">
    <div className="pointer-events-none absolute z-0"
         style={{
           width: 127,
           height: 126,
           left: '34%',
           top: '38%',
           background: '#F6CC06',
           opacity: 0.7,
           filter: 'blur(135px)',
           borderRadius: '50%',
           position: 'absolute',
         }} />
    <div className="pointer-events-none absolute z-0"
         style={{
           width: 108,
           height: 108,
           left: '62%',
           top: '48%',
           background: '#FF0004',
           opacity: 0.7,
           filter: 'blur(145px)',
           borderRadius: '50%',
           position: 'absolute',
         }} />
    <div className="relative z-10 w-full max-w-[540px] flex flex-col items-center" style={{padding: 0}}>
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={{borderRadius: 24}} width="100%" height="100%" viewBox="0 0 540 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="login-border-gradient" x1="0" y1="0" x2="540" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#AE0003" />
            <stop offset="1" stopColor="#D7B201" />
          </linearGradient>
        </defs>
        <rect x="0.5" y="0.5" width="539" height="99%" rx="24" fill="none" stroke="url(#login-border-gradient)" strokeWidth="1" />
      </svg>
      <div className="relative z-20 w-full h-full bg-transparent rounded-[24px] flex flex-col items-center" style={{padding: '40px 80px', boxSizing: 'border-box'}}>
        <div className="flex flex-col items-center justify-center w-[70px] h-[64px] mb-6">
          <img src={logoPerson} alt="Logo Person" className="h-[43px] w-[16px] object-contain mx-auto" />
          <img src={logoText} alt="Dalmar Labs" className="h-[20px] w-[70px] object-contain mx-auto mt-1" />
        </div>
        <div className="w-[380px] h-[46px] flex items-center justify-center mb-8">
          <h1 className="font-inter font-medium text-[38px] leading-[46px] tracking-[-0.07em] text-center text-black w-full">Log In</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  </div>
);

export default LoginPage; 