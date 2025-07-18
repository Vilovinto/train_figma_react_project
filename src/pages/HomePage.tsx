import React, { useState } from 'react';
import { Sidebar, TopRightButtons } from '../components/layout';
import { MainActionButtons, InputBlock, DecorativeBlobs } from '../components/home';
import { useNavigate } from 'react-router-dom';
import { useChat } from '../context/ChatContext';

interface HomePageProps {
  theme: 'light' | 'dark';
}

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const isDark = theme === 'dark';
  const { createChat, switchChat } = useChat();

  const handleSend = () => {
    if (inputValue.trim()) {
      const newId = createChat();
      switchChat(newId);
      navigate(isDark ? '/chat-dark' : '/chat', { state: { initialMessage: inputValue } });
      setInputValue('');
    }
  };

  return (
    <div className={`w-full flex flex-row relative overflow-x-hidden ${isDark ? 'bg-[#101010]' : 'bg-[#FBF8F4]'}`}>
      <Sidebar />
      <div className={`flex-1 flex flex-col items-center justify-start relative ${isDark ? 'bg-[#101010]' : 'bg-[#FBF8F4]'}` }>
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
            color: isDark ? '#fff' : '#000',
            textShadow: isDark ? '0 1px 8px rgba(0,0,0,0.24)' : undefined,
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
            onChange={({ target: { value } }) => setInputValue(value)}
            onSend={handleSend}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage; 