import React, { useState } from 'react';
import { Sidebar, TopRightButtons } from '../components/layout';
import { MainActionButtons, InputBlock, DecorativeBlobs } from '../components/home';

const HomePageDark = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="min-h-screen w-full flex flex-row relative overflow-hidden" style={{background: '#101010'}}>
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-start relative overflow-hidden">
        <h1
          style={{
            width: 770,
            margin: '200px auto 0 auto',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: 32,
            lineHeight: '100%',
            letterSpacing: 0,
            color: '#fff',
            textShadow: '0 1px 8px rgba(0,0,0,0.24)',
          }}
        >
          Good to see you! What’s on your mind?
        </h1>
        <TopRightButtons style={{ right: 70 }} />
        <DecorativeBlobs />
        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-8 items-center justify-center pt-24">
          <MainActionButtons buttons={[
            { label: 'Create a Therapeutic Area Monograph' },
            { label: 'Analyze patient\njourney' },
            { label: 'Perform resource optimization\nfor digital channels' },
          ]} />
          <InputBlock
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onSend={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageDark; 